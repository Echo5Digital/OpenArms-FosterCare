import { readFileSync } from "node:fs";
import path from "node:path";

/** Server-side only (reads the file): pixel size of a JPEG or PNG in /public, so a photo can be shown at its own proportions. */
export type ImageSize = { width: number; height: number };

function jpegSize(buf: Buffer): ImageSize | null {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let i = 2;
  while (i + 9 < buf.length) {
    if (buf[i] !== 0xff) {
      i++;
      continue;
    }
    const marker = buf[i + 1];
    if (marker === 0xff) {
      i++;
      continue;
    }
    // markers that carry no length
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      i += 2;
      continue;
    }
    // start-of-frame markers hold the size (C4, C8 and CC share the range but are not frames)
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}

function pngSize(buf: Buffer): ImageSize | null {
  if (buf.toString("ascii", 1, 4) !== "PNG") return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

const cache = new Map<string, ImageSize | null>();

// the 3:2 frame photos are normally cropped to, with a little tolerance for photos that are 3:2 give or take a pixel
const FRAME_RATIO = 1.5;
const TOLERANCE = 1.03;

/**
 * Size of a photo that is wider than the 3:2 frame, otherwise null. Those are the photos the frame would crop
 * at the sides, so they are shown whole; every other photo keeps the 3:2 crop.
 */
export function getWideImageSize(src: string): ImageSize | null {
  const size = getImageSize(src);
  return size && size.width / size.height > FRAME_RATIO * TOLERANCE ? size : null;
}

/** Size of a local image such as "/photo.jpg", or null when it can't be read (other formats, missing file). */
export function getImageSize(src: string): ImageSize | null {
  if (!src.startsWith("/")) return null;
  const cached = cache.get(src);
  if (cached !== undefined) return cached;

  let size: ImageSize | null = null;
  try {
    const buf = readFileSync(path.join(process.cwd(), "public", decodeURIComponent(src)));
    size = jpegSize(buf) ?? pngSize(buf);
  } catch {
    size = null;
  }
  if (size && (!size.width || !size.height)) size = null;
  cache.set(src, size);
  return size;
}

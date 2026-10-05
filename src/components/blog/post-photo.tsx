import Image from "next/image";
import { getWideImageSize } from "@/lib/content/posts/image-size";

/**
 * A post photo in a frame that suits it: photos wider than 3:2 are shown whole at their own proportions,
 * everything else fills a 3:2 frame (cropped to fit). `className` styles the frame, `imageClassName` the photo.
 */
export function PostPhoto({
  src,
  alt,
  sizes,
  preload = false,
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  preload?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  const wide = getWideImageSize(src);

  return (
    <div className={`relative overflow-hidden bg-mint ${wide ? "" : "aspect-[3/2]"} ${className}`}>
      {wide ? (
        <Image src={src} alt={alt} width={wide.width} height={wide.height} preload={preload} sizes={sizes} className={`h-auto w-full ${imageClassName}`} />
      ) : (
        <Image src={src} alt={alt} fill preload={preload} sizes={sizes} className={`object-cover ${imageClassName}`} />
      )}
    </div>
  );
}

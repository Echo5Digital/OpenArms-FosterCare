import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // One level up from frontend/, so the bundler can also read the code shared with the backend in ../shared (imported as @shared/*).
    root: path.join(__dirname, ".."),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;

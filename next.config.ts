import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Dev only: load Unsplash directly instead of proxying through the local optimizer,
    // which times out on slow connections. Production builds still optimize.
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "www.gstatic.com" },
    ],
  },
};

export default nextConfig;

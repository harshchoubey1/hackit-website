import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // external image domains allow kar rahe hain
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // cloudinary CDN allow
      },
    ],
  },

};

export default nextConfig;
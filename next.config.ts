import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats-alok-2c66.vercel.app",
      },
      {
        protocol: "https",
        hostname: "github-readme-streak-stats-alok-2c66.vercel.app",
      },
    ],
  },
};

export default nextConfig;

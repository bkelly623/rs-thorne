import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // This allows production builds to successfully complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
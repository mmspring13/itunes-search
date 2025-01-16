import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      // hmrRefreshes: true,
      fullUrl: true,
    },
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
      }
    ]
  }
};

export default nextConfig;

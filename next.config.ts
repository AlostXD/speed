import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.imgur.com",
        port: "",
        pathname: "/**",
        search: "",
      }
    ]
  }
};

export default nextConfig;

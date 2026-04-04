import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bharat-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

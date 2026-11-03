import type { NextConfig } from "next";

// GitHub Pages serves the site from /<repo-name>
const basePath = process.env.NODE_ENV === "production" ? "/Ayush-Portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;

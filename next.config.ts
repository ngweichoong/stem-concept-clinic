import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isProd
    ? {
        basePath: "/stem-concept-clinic",
        assetPrefix: "/stem-concept-clinic/",
      }
    : {}),
};

export default nextConfig;

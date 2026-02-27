const repo = "StarHealthy";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Necesario para GitHub Pages (genera /out estático)
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,

  // Lo que ya tenías antes
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Importante en GitHub Pages (sin optimización server-side de imágenes)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

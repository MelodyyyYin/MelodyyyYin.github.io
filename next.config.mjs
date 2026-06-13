/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // User/organization GitHub Pages site (melodyyyin.github.io) serves at the
  // root, so no basePath/assetPrefix is required.
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

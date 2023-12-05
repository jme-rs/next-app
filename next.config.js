const withExportImages = require('next-export-optimize-images')

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  experimental: { esmExternals: "loose" },
}

module.exports = withExportImages(nextConfig);

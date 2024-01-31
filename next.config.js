// const withExportImages = require('next-export-optimize-images')

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  experimental: { esmExternals: "loose" },
  // images: {
  //   deviceSizes: [640, 960, 1280, 1600, 1920],
  // },
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    // nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",

    // If you do not want to use blurry placeholder images, then you can set
    // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
    // `placeholder="empty"` to all <ExportedImage> components.
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
  },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.(md|markdown)$/,
  //     type: 'asset/source',
  //   })
  //   return config
  // },
  // "pluginOptions": {
  //   "electronBuilder": {
  //     "nodeIntegration": true, // this may or may not be necessary - you can try without it
  //     externals: ['node-pty'] // this excludes the node-pty from the front end
  //   }
  // }
}

module.exports = nextConfig;
// module.exports = withExportImages(nextConfig);

const withPlugins = require("next-compose-plugins");
const withOffline = require("next-offline");
// const withOptimizedImages = require("next-optimized-images");

const nextConfig = {
  // distDir: "build",
  env: {},

  exportTrailingSlash: true,

  webpack: (config, options) => {
    config.node = {
      fs: "empty",
    };
    return config;
  },
};

module.exports = withPlugins([withOffline, {}], nextConfig);

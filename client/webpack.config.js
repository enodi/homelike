const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base");

module.exports = env => {
  const envConfig = require(`./webpack-build/webpack.${env.mode}`);
  return webpackMerge({ mode: env.mode }, baseConfig, envConfig);
};

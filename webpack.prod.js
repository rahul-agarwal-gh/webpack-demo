const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js", //changed output file name to dynamic as we have two entry points file. so based on entry file,
    //different output files will be created.
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "./imgs/[name].[hash].[ext]",
  },
  plugins: [new CleanWebpackPlugin()]
});
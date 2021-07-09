const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js", //changed output file name to dynamic as we have two entry points file. so based on entry file,
    //different output files will be created.
    path: path.resolve(__dirname, "dist")
  },
});
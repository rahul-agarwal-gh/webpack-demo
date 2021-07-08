const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html" //We are telling this plugin to use this file for template and add the script tag with link to our main.js file 
    })
  ],
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: [
                'style-loader', //3. Injects styles into DOM
                'css-loader',  //2. Turns css into commonjs
                'sass-loader' //1. Turns sass into css
            ]
        }
    ]
  }
};
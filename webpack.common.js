const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
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
        },
        {
          test: /\.html$/,
          use: ['html-loader']
        }
    ]
  }
};
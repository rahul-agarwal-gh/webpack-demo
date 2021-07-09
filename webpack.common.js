const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js", //output file with main.js will be created from index.js
    vendor: "./src/vendor.js" //output file with name vendor.js will be created from src/vendor.js
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
        },
        {
          test: /\.html$/,
          use: ['html-loader']
        }
    ]
  }
};
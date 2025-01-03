const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/controller.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 4000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      exclude: /node_modules/,
      use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{loader: "babel-loader"}],
    },
    ],
  },
};

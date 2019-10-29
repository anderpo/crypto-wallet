require("dotenv").config();
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./index.js",
  mode: process.env.NODE_ENV,

  output: {
    publicPath: '',
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },

  devServer: {
    port: 3005
  },

  devtool: process.env.NODE_ENV === "development" ? "source-map" : "",

  module: {
    rules: []
  },

  plugins: []
};

// JavaScript
// ------------------------------------
config.module.rules.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/env", "@babel/react"]
    }
  }
});

// Images/Videos
// ------------------------------------
config.module.rules.push({
  test: /\.(png|jpg|gif|mp4)$/,
  use: {
    loader: "url-loader",
    options: {
      limit: 8192,
      name: "assets/[name].[ext]"
    }
  }
});

// HTML Template
// ------------------------------------
config.plugins.push(
  new HtmlWebpackPlugin({
    template: "src/index.html",
    inject: true,
    minify: {
      collapseWhitespace: process.env.NODE_ENV !== "development"
    }
  })
);

module.exports = config;

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "[name].[contenthash].js", // 각 청크에 대해 고유한 파일 이름 설정
    path: path.resolve(__dirname, "dist"),
    clean: true, // 이전 빌드 파일을 정리
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    hot: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};

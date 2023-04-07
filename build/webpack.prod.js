const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "css/[name].css" }),
  ],
  optimization: {
    usedExports: true, // treeshaking
    minimize: true,
    minimizer: [
      // 压缩
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin({ test: /\.js(\?.*)?$/i }),
      "...",
    ],
    splitChunks: {
      // 分包
      cacheGroups: {
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 2, //2>0  nodulesmodules里的模块将优先打包进vendor
        },
        commons: {
          name: "commons", //async异步代码分割 initial同步代码分割 all同步异步分割都开启
          chunks: "all",
          minSize: 30000, //字节 引入的文件大于30kb才进行分割
          priority: 0, //优先级，先打包到哪个组里面，值越大，优先级越高
        },
      },
    },
  },
};

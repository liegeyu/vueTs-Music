const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common");
const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");

module.exports = (env, argv) => {
  let config = argv.mode === "development" ? devConfig : prodConfig;
  return merge(commonConfig, config);
};

// const path = require("path");

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// module.exports = {
//   entry: "./src/main.ts",
//   devServer: {
//     static: "./dist",
//     port: 3000,
//     open: true,
//   },
//   devtool: "inline-source-map",
//   cache: {
//     type: "filesystem",
//   },
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "[name].js",
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//     extensions: [".ts", ".js", ".json", ".vue"],
//     module: [path.resolve("node_modules")],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: {
//           loader: "ts-loader",
//         },
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({ template: "./public/index.html" }),
//     new CleanWebpackPlugin(),
//   ],
// };

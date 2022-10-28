const path = require("path");
const { SeraphWebpackPlugin } = require("@za/sourcemap-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  mode: "production",
  plugins: [
    new SeraphWebpackPlugin({
      env: "test",
      companyId: "79002",
      appId: "f800ffffffd04920",
      version: "1.0.0",
      enable: process.env.NODE_ENV !== "development",
    }),
  ],
};

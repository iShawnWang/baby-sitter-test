const { SeraphWebpackPlugin } = require("@za/sourcemap-webpack-plugin");
const { addWebpackPlugin, override } = require("customize-cra");

module.exports = override(
  addWebpackPlugin(
    new SeraphWebpackPlugin({
      env: "test",
      companyId: "79002",
      appId: "f800ffffffd04920",
      version: "1.0.0",
      enable: process.env.NODE_ENV !== "development",
    })
  )
);

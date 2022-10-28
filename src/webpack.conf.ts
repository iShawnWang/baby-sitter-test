import { Configuration } from "webpack";
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = function (userConfig: Record<string, string>): Configuration {
  const { entry, filename, template } = userConfig;

  return {
    entry,
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: `${filename}.js`,
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: template || "src/template.html",
        filename: `${filename}.html`,
      }),
    ],
  };
};

export default config;

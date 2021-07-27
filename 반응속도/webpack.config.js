const path = require("path");
const ReactRefresh = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
  name: "reaction-rate",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"],
                },
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  plugins: [new ReactRefresh()],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    publicPath: "/dist/",
    hot: true,
  },
};

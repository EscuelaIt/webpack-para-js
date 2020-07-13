const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "index.js",
  },
  entry: {
    main: "./src/js/index.js",
  },
  devServer: {
    port: 9001,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      // Nota después de clase: Hay que poner ./ en el "filename" para que tome bien la ruta en todos los casos
      filename: "./index.html",
      template: "src/index.html",
      hash: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: [
                    // Best practice: https://github.com/babel/babel/issues/7789
                    ">=1%",
                    "not ie 11",
                    "not op_mini all",
                  ],
                },
                debug: true,
              },
            ],
          ],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
};

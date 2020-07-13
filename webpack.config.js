const path = require("path");

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
};

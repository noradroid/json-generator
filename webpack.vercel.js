const path = require("path");

module.exports = {
  target: "node",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "api"),
  },
  entry: {
    generate: "./src/api/generate.ts",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    // fallback: {
    //   url: false,
    //   path: false,
    //   stream: false,
    //   queryString: false,
    //   util: false,
    //   buffer: false,
    //   string_decoder: false,
    //   querystring: false,
    //   http: false,
    //   crypto: false,
    //   zlib: false,
    // },
  },
};

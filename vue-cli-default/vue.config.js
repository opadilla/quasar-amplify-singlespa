const path = require("path");

module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  configureWebpack: {
    output: {
      filename: "vueCliDefault.js",
      library: "vueCliDefault",
      libraryTarget: "amd"
    }
  },
  outputDir: path.resolve(__dirname, "build/vueCliDefault"),
  pages: {
    index: {
      entry: path.resolve(__dirname, "src/vueCliDefault.js"),
    }
  }
};

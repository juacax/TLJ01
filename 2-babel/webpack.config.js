const path = require("path");
const basePath = __dirname;
const distPath = "dist";

module.exports = {
  //Modo determina si es dev o prod
  mode: "production",
  //Punto de entrada, o de inicio de la interpretación
  entry: {
    app: "./src/main.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  //Punto de salida, o archivo resultante
  output: {
    path: path.join(basePath, distPath),
    filename: "bundle.js"
  }
};

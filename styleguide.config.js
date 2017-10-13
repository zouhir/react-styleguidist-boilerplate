module.exports = {
  components: "src/components/**/[A-Z]*.js",
  defaultExample: true,
  title: "Styleguidist Boilerplate",
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        },
        {
          test: /(\.scss)$/,
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: true,
                localIdentName: "[local]"
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    }
  }
};

const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: './frontend/kooflix.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'].map(require.resolve)
          }
        }
      }, 
      {
        test: /\.css$/,
        use: [
            {loader: "style-loader"},
            {loader: "css-loader"}
        ]
    },
    {
      test: /\.(png|jpg|gif)$/i,
      use: [
          {
              loader: 'url-loader',
              options: {
                  limit: 8192
              }
          }
      ]
  },
  {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [{
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
        }
    }]
}
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devtool: 'source-map'
};
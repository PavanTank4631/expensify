const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = (env) => {
  const isProduction = env === 'production'

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ]
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css'
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}


// const path = require('path');
// const ExtractTextPlugins = require('mini-css-extract-plugin');

// module.exports = (env) => {
//   const isProduction = env === 'production';
//   const CSSExtract = new ExtractTextPlugins('style.css');

//   return {
//     entry: './src/app.js',
//     output: {
//       path: path.join(__dirname, 'public'),
//       filename: 'bundle.js'
//     },
//     module: {
//       rules: [{
//         loader: 'babel-loader',
//         test: /\.js$/,
//         exclude: /node_modules/
//       }, {
//         test: /\.s?css$/,
//         use: CSSExtract.extract({ 
//           use: [
//             'css-loader',
//             'sass-loader'
//           ]
//          })
//       },
//       {
//         test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
//         loader: 'url-loader?limit=100000'
//       }]
//     },
//     plugins: [
//       CSSExtract
//     ],

//     devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
//     devServer: {
//       contentBase: path.join(__dirname, 'public'),
//       historyApiFallback: true
//     }
//   }
// }

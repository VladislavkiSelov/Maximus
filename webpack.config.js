// const path = require('path');
// module.exports = {
//   mode: 'development',
//   entry: './js/script.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//      assetModuleFilename: "[name][ext]"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: ['style-loader', 'css-loader', 'sass-loader']
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg)$/i,
//         type: 'asset/resource'
//       }
//     ]
//   }
// };


// const path = require('path');
// const autoprefixer = require('autoprefixer')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// module.exports = {
//   mode: 'development',
//   entry: './js/script.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//     assetModuleFilename: "[name][ext]"
//   },
//   plugins: [
//     new HtmlWebpackPlugin({ template: './pages/index.html' })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(scss)$/,
//         use: [
//           {
//             // Adds CSS to the DOM by injecting a `<style>` tag
//             loader: 'style-loader'
//           },
//           {
//             // Interprets `@import` and `url()` like `import/require()` and will resolve them
//             loader: 'css-loader'
//           },
//           {
//             // Loader for webpack to process CSS with PostCSS
//             loader: 'postcss-loader',
//             options: {
//               postcssOptions: {
//                 plugins: () => [
//                   autoprefixer
//                 ]
//               }
//             }
//           },
//           {
//             // Loads a SASS/SCSS file and compiles it to CSS
//             loader: 'sass-loader'
//           }
//         ]
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg)$/i,
//         type: 'asset/resource'
//       }
//     ]
//   }
// };






const path = require('path');
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "[name][ext]",
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './pages/index.html',
      // minify: {
      //   collapseWhitespace: true
      // }
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'img'),
          to: path.resolve(__dirname, 'dist/img')
        },
      ],
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  autoprefixer
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource',
      }
    ]
  }
};






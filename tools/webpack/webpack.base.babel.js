/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');

module.exports = (options) => ({
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output),
  module: {
    rules: [{
      test: /\.js$/, // Transform all .js files
      use: {loader: 'babel-loader',  query: options.babelQuery},
      exclude: /node_modules/
    },	
    { test: /\.css$/,
      use:[{
           loader: "style-loader"
         },
         {
           loader: "css-loader", 
		   options: {
			modules: true
			}
          }, 
		  
        ]
    },{
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use:{loader: 'file-loader'},
    }, {
      test: /\.(jpg|png|gif)$/,
      use: [
        'file-loader',
        'image-webpack-loader?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
      ],
    }, {
      test: /\.html$/,
      use:{loader: 'html-loader'},
    }, {
      test: /\.(mp4|webm)$/,
      use:{loader: 'url-loader?limit=10000'},
    }],
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks
    // Alternatively we can use --define parameter as shown in example directly in the package.json
    // E.g, 'webpack -p --define process.env.NODE_ENV='\"production\"' --progress --colors'
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.LoaderOptionsPlugin({
       devtool: options.devtool,
       target: 'web',
       stats: false,
       progress: true,
     })
  ]),
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '*',
      '.js',
      '.jsx',
      '.react.js',
    ],
    mainFields: [
      'jsnext:main',
      'main',
    ],
  }


});

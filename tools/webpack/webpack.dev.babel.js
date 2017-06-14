/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const logger = require('../../server/logger');
const cheerio = require('cheerio');
const pkg = require(path.resolve(process.cwd(), 'package.json'));
const dllPlugin = pkg.dllPlugin;

const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

const plugins = [
  new webpack.HotModuleReplacementPlugin(), // webapck hot reloading plugin
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    inject: true, // This needs to be set to true for files injection e.g. bundle.js / *.css /*.dll.js
    templateContent: generateTemplateContent(),
  }),
];

module.exports = require('./webpack.base.babel')({

  entry: [
    'eventsource-polyfill', // Necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    path.join(process.cwd(), 'app/app.js'), // Start with js/app.js
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  // Add plugins
  plugins: dependencyHandlers().concat(plugins),


  /*------ css module ------
  * In Css, Each CSS class gets exposed globally and it’s very easy to inadvertently break a piece of component or app
  * when editing or adding CSS for a new feature. CSS Module allows us to add css which is scoped to a component only.
  * style-loader is a Webpack loader that can load some CSS and inject it into the document via a <link> tag.
  * css-loader is the loader that can parse a CSS file and apply various transforms to it. Crucially it has a CSS Modules
  * mode that can take our CSS and hash the classes
  -----Post-css------
  * PostCSS is a JavaScript CSS parser which is based on the plugins system, meaning you can use only those plugins which
  * you really need at the moment.
  * PostCSS in the areas where preprocessors can't be useful such as linting, autoprefixing or CSS4 features
  * importLoaders=1 <-- Whenever we want URLs to be inlined—whether other CSS files, fonts, or image assets—this usually has to be set
  *
  * the loader syntax below is string-syntax. Apparently we can also use  webpack-combine-loaders to write object-syntax
  */
  cssLoaders: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',


  //Visit https://github.com/postcss/postcss#plugins to add postcss plugin according to your project needs
   //Visit https://github.com/postcss/postcss#plugins to add postcss plugin according to your project needs
  postcssPlugins: [
    postcssFocus(), // Add a :focus to every :hover
    cssnext({ // With this PostCSS plugin, you can use future CSS4 syntax in your current apps, also auto-prefixes the CSS...
      browsers: ['last 2 versions', 'IE > 10'], // ...based on this browser list
    }),
    postcssReporter({ // output messages from plugins to the terminal
      clearMessages: true,
    }),
  ],
  
  


  // Tell babel that we want to hot-reload
  babelQuery: {
    presets: ['react-hmre'],
  },

  // source map for easier debugging, but dont keep it for production as it is performance intesive
  devtool: 'source-map',
});

/**
 *
 * If there is a dllPlugin key on the project's package.json, the
 * Webpack DLL Plugin will be used.  Otherwise the CommonsChunkPlugin
 * will be used.
 *
 */
function dependencyHandlers() {
  // Don't do anything during the DLL Build step
  if (process.env.BUILDING_DLL) { return []; }

  // If the package.json does not have a dllPlugin property, uncomment the CommonsChunkPlugin
  // *** This is important since we are using react-router getComponents API ****.
  /*if (!dllPlugin) {
    return [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        children: true,
        minChunks: 2,
        async: true,
      }),
    ];
  }*/

  const dllPath = path.resolve(process.cwd(), dllPlugin.path || 'node_modules/react-dlls');

  /**
   * To exclude any server side dependencies by listing them in dllConfig.exclude
   */
  if (!dllPlugin.dlls) {
    const manifestPath = path.resolve(dllPath, 'reactDeps.json');

    if (!fs.existsSync(manifestPath)) {
      logger.error('The DLL manifest is missing. Please run `npm run build:dll`');
      process.exit(0);
    }

    return [
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require(manifestPath),
      }),
    ];
  }

  // If DLLs are explicitly defined, we automatically create a DLLReferencePlugin for each of them.
  const dllManifests = Object.keys(dllPlugin.dlls).map((name) => path.join(dllPath, `/${name}.json`));

  return dllManifests.map((manifestPath) => {
    if (!fs.existsSync(path)) {
      if (!fs.existsSync(manifestPath)) {
        logger.error(`The following Webpack DLL manifest is missing: ${path.basename(manifestPath)}`);
        logger.error(`Expected to find it in ${dllPath}`);
        logger.error('Please run: npm run build:dll');

        process.exit(0);
      }
    }

    return new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(manifestPath),
    });
  });
}

/**
 * We dynamically generate the HTML content in development so that the different
 * DLL Javascript files are loaded in script tags and available to our application.
 */
function generateTemplateContent() {
  const html = fs.readFileSync(
    path.resolve(process.cwd(), 'app/index.html')
  ).toString();

  if (!dllPlugin) { return html; }

  const doc = cheerio(html);
  const body = doc.find('body');
  const dllNames = !dllPlugin.dlls ? ['reactDeps'] : Object.keys(dllPlugin.dlls);

  dllNames.forEach(dllName => body.append(`<script data-dll='true' src='/${dllName}.dll.js'></script>`));

  return doc.toString();
}

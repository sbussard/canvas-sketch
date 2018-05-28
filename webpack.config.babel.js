import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// constants

const NODE_ENV = process.env.NODE_ENV || 'production';
const TEMPLATE_FILE = path.resolve('src', 'index.html');
const APP_ENTRY_FILE = path.resolve('src', 'index.jsx');
const THEME_PATH = path.resolve('src', 'theme');
const OUTPUT_PATH = path.resolve('docs');

// plugins =====================================================================

let templatePlugin = new HtmlWebpackPlugin({
  template: TEMPLATE_FILE,
  inject: 'body'
});

let hotReloaderPlugin = new webpack.HotModuleReplacementPlugin();

// config ======================================================================

let config = {
  entry: {
    app: ['babel-polyfill', APP_ENTRY_FILE]
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      theme: THEME_PATH
    }
  },
  output: {
    path: OUTPUT_PATH,
    filename: '[name].js'
  },
  plugins: [templatePlugin],
  module: {
    rules: [
      {
        test: /\.ya?ml$/,
        use: {
          loader: 'yaml-import-loader'
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/webpack-dev-server)/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader?insertAt=top',
          'css-loader?modules&importLoaders=1&localIdentName=[local]-[hash:base64:4]',
          'sass-loader'
        ]
      },
      {
        test: /\.png$/,
        use: ['file-loader']
      }
    ]
  }
};

if (NODE_ENV === 'development') {
  config.mode = 'development';
  config.devtool = 'source-map';
  config.entry.hot = [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
  ];
  config.plugins.push(hotReloaderPlugin);
}

export default config;

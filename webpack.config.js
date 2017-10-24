const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = env => {
  const HOST = (env || {}).HOST || '127.0.0.1';
  // const PORT = env.PORT || 8097;
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve('docs'),
      filename: 'bundle.js',
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
          exclude: ['node_modules']
        },        
      ],
    },
    
    devServer: {
      host: HOST
    },
    
    plugins: [HtmlWebpackPluginConfig],
  };
};

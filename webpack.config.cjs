const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  const isDevMode = env.mode === 'development';

  return {
    mode: isDevMode ? 'development' : 'production',
    devtool: isDevMode ? 'inline-source-map' : false,
    entry: { main: './src/index.tsx' },
    output: {
      publicPath: '/',
      path: path.join(__dirname, 'dist'),
      filename: './static/js/[name].[contenthash:8].bundle.js',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@src': path.join(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  { targets: 'defaults', useBuiltIns: 'usage', corejs: 3 },
                ],
                ['@babel/preset-react', { runtime: 'automatic' }],
                ['@babel/preset-typescript'],
              ],
            },
          },
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};

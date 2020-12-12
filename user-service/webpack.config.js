const path = require('path')
const dotenv = require('dotenv')
const webpack = require('webpack')
const NodemonPlugin = require('nodemon-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const CopyPlugin = require('copy-webpack-plugin');
const glob = require('glob');

module.exports = [{
    entry: glob.sync('./src/models/*.js').reduce((entries, entry) => Object.assign(entries, { [entry.replace('./src/models', '').replace('.js', '')]: entry }), {}),
    externals: [nodeExternals()],
    mode: 'development',
    output: {
      filename: '[name].js',
      libraryTarget: 'commonjs',
      path: path.resolve(__dirname, 'build/models'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                [
                    "@babel/plugin-proposal-decorators",
                    {
                        "decoratorsBeforeExport": false
                    }
                ],
                [
                    "@babel/plugin-proposal-class-properties",
                    {
                        "loose": true
                    }
                ],
                "@babel/plugin-transform-modules-commonjs",
                "babel-plugin-root-import",
                "@babel/plugin-transform-runtime"
              ],
              presets: [[
                "@babel/preset-env",
                {
                    "targets": {
                        "node": "current"
                    }
                }
            ]],
            },
          },
        },
      ],
    },
    target: 'node',
    node: {
      __dirname: false,
    },
  },{
    entry: {
        app: './index.js',
    },
    mode: 'development',
    node: {
        __dirname: false,
        __filename: false,
      },
    externals: [nodeExternals()],
    devtool: 'inline-source-map',
    "target": "node",
    // Run babel on all .js files and skip those in node_modules
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.config().parsed)
        }),
        new NodemonPlugin(),
        new CopyPlugin({
            patterns: [
              { from: 'mailer/templates', to: 'templates' },
            //   { from: 'src/models', to: 'models' },
            ],
          }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: __dirname,
    },
}];
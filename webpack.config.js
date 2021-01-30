const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    index: './lib/index.ts',
    props: './lib/props.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './'),
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  externals: [
    nodeExternals({
      allowlist: [
        'fs-extra',
        'lodash',
        'react-docgen',
        'recast',
      ],
    }),
  ],
  // optimization: {
  //   minimize: false,
  // },
  target: 'node',
}

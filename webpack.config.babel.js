const path = require('path')

module.exports =  {
  entry: './src/index.js',
  output: {
    library: 'GridTemplateParser',
    libraryTarget: 'umd',
    globalObject: 'this',
    path: path.join(__dirname, 'dist'),
    filename: 'grid-template-parser.js'
},
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
            presets: ['@babel/preset-env']
        }
      },
    ],
  },
  plugins: [
  ],
};

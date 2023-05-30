const path = require('path');

module.exports = {
  // 진입점 파일 지정
  entry: './src/index.js',
  // 빌드 된 파일 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // 다른 리소스에 대한 로더 설정
    ],
  },
};

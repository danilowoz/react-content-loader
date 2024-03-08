module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [['@babel/plugin-transform-private-methods', { loose: true }]],
}

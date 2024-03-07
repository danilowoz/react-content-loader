module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/.pnpm/(?!react-native-payfort-sdk|react-native)/',
  ],
  testRegex: '/src/native/__tests__/.*(\\.|/)(test|spec)\\.[jt]sx?$',
}

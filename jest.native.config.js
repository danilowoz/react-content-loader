const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  ...tsjPreset,
  preset: "react-native",
  collectCoverage: true,
  coverageDirectory: './coverage/native',
  "transformIgnorePatterns": [
    "/node_modules/(?!react-native|react-clone-referenced-element|react-navigation)"
  ],
  transform: {
    ...tsjPreset.transform,
    '^.+\\.js$': require.resolve('react-native/jest/preprocessor.js'),
  },
  testRegex: '/src/native/__tests__/.*(\\.|/)(test|spec)\\.[jt]sx?$',
  setupFiles: ['./__mocks__/jestSetupFile.js'],
  globals: {
    'ts-jest': {
      babelConfig: false,
      tsConfig: 'tsconfig.test.json',
    },
  },
};
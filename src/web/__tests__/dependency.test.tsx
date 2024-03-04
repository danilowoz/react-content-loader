import pkg from '../../../package.json'
import pkgNative from '../../../src/native/package.json'

describe('web/package.json', () => {
  it(`doesn't have any dependency for web version`, () => {
    expect(Object.keys(pkg.dependencies).length).toBe(0)
  })
})

describe('native/package.json', () => {
  it(`has only one dependency which is for support react-native`, () => {
    expect('react-native-svg' in pkgNative.dependencies).toBe(true)
    expect(Object.keys(pkgNative.dependencies).length).toBe(1)
  })
})

import pkg from '../../package.json'

describe('package.json', () => {
  it(`has only one dependency which is for support react-native`, () => {
    expect('react-native-svg' in pkg.dependencies).toBe(true)
    expect(Object.keys(pkg.dependencies).length).toBe(1)
  })
})

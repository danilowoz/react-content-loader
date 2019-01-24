import pkg from '../../package.json'

describe('package.json', () => {
  it(`has no dependencies`, () => {
    expect(Object.keys(pkg.dependencies).length).toBe(0)
  })
})

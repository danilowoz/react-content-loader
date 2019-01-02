import uid from '../uid'

describe('unique id', () => {
  const options = 100
  // @ts-ignore To avoid adding polyfill for `fill` becoz fill is ES6 feature and our target is ES5
  const ids = new Array(options).fill(' ').map(item => uid())
  // @ts-ignore To avoid adding polyfill for `from`
  const unique = Array.from(new Set(ids))

  it(`should have ${options} diferents ids`, () => {
    expect(unique.length).toBe(options)
  })

  it(`return a string`, () => {
    expect(typeof uid()).toBe('string')
  })
})

import offsetValueBound from '../offsetValueBound'

describe('offset value bound ', () => {
  it('should return an integer', () => {
    expect(offsetValueBound(-1)).toBe(0)
    expect(offsetValueBound(0)).toBe(0)
  })

  it('should return a max value 1', () => {
    expect(offsetValueBound(1)).toBe(1)
    expect(offsetValueBound(1.1)).toBe(1)
    expect(offsetValueBound(2)).toBe(1)
  })
})

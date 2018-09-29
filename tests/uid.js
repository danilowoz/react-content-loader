import { expect } from "chai"

import uid from "../src/uid"

describe("unique id", () => {
  const options = 100
  const ids = new Array(options).fill(" ").map(item => uid())
  const unique = Array.from(new Set(ids))

  it(`should have ${options} diferents ids`, () => {
    expect(unique).to.have.length(options)
  })

  it(`return a string`, () => {
    expect(uid()).to.be.a("string")
  })
})

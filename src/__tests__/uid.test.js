import React from "react"

import uid from "../uid"

describe("unique id", () => {
  const options = 100
  const ids = new Array(options).fill(" ").map(item => uid())
  const unique = Array.from(new Set(ids))

  it(`should have ${options} diferents ids`, () => {
    expect(unique.length).toBe(options)
  })

  it(`return a string`, () => {
    expect(typeof uid()).toBe("string")
  })
})

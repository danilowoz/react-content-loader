import React from "react"
import { render } from "react-dom"

import ContentLoader from "../"

describe("index", () => {
  const div = document.createElement("div")
  div.id = "root"
  document.body.appendChild(div)

  it("renders", () => {
    render(<ContentLoader />, document.getElementById("root"))
  })

  it("renders a SVG as root element ", () => {
    render(<ContentLoader />, document.getElementById("root"))
    const svgElement = document
      .getElementById("root")
      .getElementsByTagName("svg")

    expect(svgElement.length).toBe(1)
  })
})

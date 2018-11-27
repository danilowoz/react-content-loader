import "jsdom-global/register"
import React from "react"

import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import chai, { expect } from "chai"
import chaiEnzyme from "chai-enzyme"

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

import Svg from "../src/Svg"
import defaultProps from "../src/index"

describe("<Svg /> Check id`s to render the SVG", () => {
  const wrapper = mount(<Svg {...defaultProps} />)

  it("is mask with the same `idClip`", () => {
    const idClip = wrapper.find("clipPath").prop("id")
    expect(wrapper.find("rect[clipPath]").prop("clipPath")).to.have.equal(
      `url(#${idClip})`
    )
  })

  it("is linearGradient with the same `idClip`", () => {
    const idGradient = wrapper.find("linearGradient").prop("id")
    expect(wrapper.find("rect[clipPath]").prop("style").fill).to.have.equal(
      `url(#${idGradient})`
    )
  })

  it("has a `svg`", () => {
    expect(wrapper.find("svg")).to.have.length(1)
  })

  it("has a `rect` with `clipPath`", () => {
    expect(wrapper.find("rect[clipPath]")).to.have.length(1)
  })

  it("has a `linearGradient`", () => {
    expect(wrapper.find("linearGradient")).to.have.length(1)
  })

  it("has three `stop`", () => {
    expect(wrapper.find("stop")).to.have.length(3)
  })

  it("has `stop` inside the `linearGradient`", () => {
    expect(wrapper.find("linearGradient").find("stop")).to.have.length(3)
  })

  it("has one `animate` inside each `stop`", () => {
    const stopElem = wrapper.find("stop")
    expect(stopElem.map(elem => elem.find("animate"))).to.have.length(3)
  })
})

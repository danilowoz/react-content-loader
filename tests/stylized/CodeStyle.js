import "jsdom-global/register"
import React from "react"

import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import chai, { expect } from "chai"
import chaiEnzyme from "chai-enzyme"

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

import CodeStyle from "../../src/stylized/CodeStyle"

describe("<CodeStyle />:", () => {
  const wrapper = mount(<CodeStyle speed={20} />)

  it("has nine `rect`", () => {
    expect(wrapper.find("clipPath rect")).to.have.length(9)
  })

  it("prop is propagated", () => {
    expect(wrapper.props().speed).to.equal(20)
  })
})

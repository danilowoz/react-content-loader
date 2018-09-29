import "jsdom-global/register"
import React from "react"

import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import chai, { expect } from "chai"
import chaiEnzyme from "chai-enzyme"

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

import BulletListStyle from "../../src/stylized/BulletListStyle"

describe("<BulletListStyle />:", () => {
  const wrapper = mount(<BulletListStyle speed={20} />)

  it("has four `circle`s followed by a `rect`", () => {
    expect(wrapper.find("clipPath circle + rect")).to.have.length(4)
  })

  it("prop is propagated", () => {
    expect(wrapper.props().speed).to.equal(20)
  })
})

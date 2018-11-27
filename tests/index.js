import "jsdom-global/register"
import React from "react"

import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import chai, { expect } from "chai"
import chaiEnzyme from "chai-enzyme"

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

import ContentLoader from "../src/index"

describe("<ContentLoader />:", () => {
  const wrapper = mount(
    <ContentLoader
      rtl
      speed={10}
      width={200}
      height={200}
      animate={false}
      primaryColor="#000"
      secondaryColor="#fff"
      primaryOpacity={0.06}
      secondaryOpacity={0.12}
      preserveAspectRatio="xMaxYMax"
      className="random-className"
      style={{ marginBottom: "10px" }}
      ariaLabel="My custom loading title"
    />
  )

  describe("when type is custom", () => {
    const customWrapper = mount(
      <ContentLoader>
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="82" y="44" rx="3" ry="3" width="250" height="10" />
        <circle cx="35" cy="35" r="35" />
      </ContentLoader>
    )

    it("should render custom element", () => {
      expect(customWrapper.find("rect")).to.have.length(3)
      expect(customWrapper.find("circle")).to.have.length(1)
    })
  })

  describe("Props are propagated", () => {
    it("`speed` is a number and it's used", () => {
      expect(wrapper.props().speed).to.equal(10)
    })

    it("`height` is a number and it's used", () => {
      expect(wrapper.props().height).to.equal(200)
    })

    it("`width` is a number and it's used", () => {
      expect(wrapper.props().width).to.equal(200)
    })

    it("`animate` is a boolean and it's used", () => {
      expect(wrapper.props().animate).to.be.false
    })

    it("`primaryColor` is a string and it's used", () => {
      expect(wrapper.props().primaryColor).to.string("#000")
    })

    it("`secondaryColor` is a string and it's used", () => {
      expect(wrapper.props().secondaryColor).to.string("#fff")
    })

    it("`primaryOpacity` is a number and it's used", () => {
      expect(wrapper.props().primaryOpacity).to.equal(0.06)
    })

    it("`secondaryOpacity` is a number and it's used", () => {
      expect(wrapper.props().secondaryOpacity).to.equal(0.12)
    })

    it("`preserveAspectRatio` is a string and it's used", () => {
      expect(wrapper.props().preserveAspectRatio).to.string("xMaxYMax")
    })

    it("`style` is an object and it's used", () => {
      expect(wrapper.props().style).to.deep.equal({ marginBottom: "10px" })
    })

    it("`rtl` is a boolean and it's used", () => {
      expect(wrapper.props().rtl).to.equal(true)
    })

    it("`ariaLabel` is a string and it's used", () => {
      expect(wrapper.props().ariaLabel).to.string("My custom loading title")
    })
  })

  it("`uniquekey` does not generate undefined `id` values for svg", () => {
    const idClip = wrapper.find("clipPath").prop("id")
    const idGradient = wrapper.find("linearGradient").prop("id")
    expect(idClip).to.not.contain(undefined)
    expect(idGradient).to.not.contain(undefined)
  })

  it("`uniquekey` is used", () => {
    const uniquekey = "my-unique-key"
    const componentSSR = mount(<ContentLoader uniquekey={uniquekey} />)
    const idClip = componentSSR.find("clipPath").prop("id")
    const idGradient = componentSSR.find("linearGradient").prop("id")

    expect(idClip).to.equal(`${uniquekey}-idClip`)
    expect(idGradient).to.equal(`${uniquekey}-idGradient`)
  })

  it("render two components with diferents ids", () => {
    const otherComp = mount(<ContentLoader />)

    const idClip = wrapper.find("clipPath").prop("id")
    const idGradient = wrapper.find("linearGradient").prop("id")

    const idClipOtherCom = otherComp.find("clipPath").prop("id")
    const idGradientOtherCom = otherComp.find("linearGradient").prop("id")

    expect(idClip).to.not.equal(idClipOtherCom)
    expect(idGradient).to.not.equal(idGradientOtherCom)
  })

  describe("inside <SVG />", () => {
    it("exists", () => {
      expect(wrapper.find("svg")).to.have.length(1)
    })

    it("has no `animate` element", () => {
      expect(wrapper.find("animate")).to.have.length(0)
    })
  })

  describe("a11y", () => {
    it("svg has aria label", () => {
      expect(wrapper.find("svg").prop("aria-labelledby")).to.string("")
    })

    it("svg has role", () => {
      expect(wrapper.find("svg").prop("role")).to.string("img")
    })

    it("svg has a title", () => {
      expect(wrapper.find("title")).to.have.length(1)
      expect(wrapper.find("title").text()).to.string("")
    })
  })
})

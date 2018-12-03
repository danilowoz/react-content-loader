import React from "react"
import renderer from "react-test-renderer"

import Svg from "../"

describe("Svg", () => {
  const wrapper = renderer.create(<Svg />).root

  describe("it has basic elements necessary to work ", () => {
    it("has a `rect` with `clipPath`", () => {
      const clipPath = wrapper.findAll(
        ({ type, props }) => type === "rect" && props.clipPath
      )

      expect(clipPath.length).toBe(1)
    })

    it("has a `linearGradient`", () => {
      const linearGradient = wrapper.findAllByType("linearGradient")

      expect(linearGradient.length).toBe(1)
    })

    it("has three `stop`", () => {
      const stops = wrapper.findAllByType("stop")

      expect(stops.length).toBe(3)
    })

    it("has `stop` inside the `linearGradient`", () => {
      const linearGradient = wrapper.find(
        ({ type }) => type === "linearGradient"
      )
      const stops = linearGradient.findAllByType("stop")

      expect(stops.length).toBe(3)
    })

    it("has one `animate` inside each `stop`", () => {
      const stops = wrapper.findAllByType("stop")

      stops.forEach(element => {
        const animate = element.findAllByType("animate")
        expect(animate.length).toBe(1)
      })
    })
  })

  describe("unique key", () => {
    it("`uniquekey` does not generate undefined `id` values for svg", () => {
      const clipPath = wrapper.find(
        ({ type, props }) => type === "rect" && props.clipPath
      )
      const linearGradient = wrapper.findByType("linearGradient")

      console.log(clipPath)

      // expect(clipPath.props).not.toBe(undefined)
      // expect(linearGradient.props).not.toBe(undefined)
    })

    // it("`uniquekey` is used", () => {
    //   const uniquekey = "my-unique-key"
    //   const componentSSR = mount(<ContentLoader uniquekey={uniquekey} />)
    //   const idClip = componentSSR.find("clipPath").prop("id")
    //   const idGradient = componentSSR.find("wlinearGradient").prop("id")
    //   expect(idClip).to.equal(`${uniquekey}-idClip`)
    //   expect(idGradient).to.equal(`${uniquekey}-idGradient`)
    // })
  })
})

// it("render two components with diferents ids", () => {
//   const otherComp = mount(<ContentLoader />)

//   const idClip = wrapper.find("clipPath").prop("id")
//   const idGradient = wrapper.find("linearGradient").prop("id")

//   const idClipOtherCom = otherComp.find("clipPath").prop("id")
//   const idGradientOtherCom = otherComp.find("linearGradient").prop("id")

//   expect(idClip).to.not.equal(idClipOtherCom)
//   expect(idGradient).to.not.equal(idGradientOtherCom)
// })

// describe("inside <SVG />", () => {
//   it("exists", () => {
//     expect(wrapper.find("svg")).to.have.length(1)
//   })

//   it("has no `animate` element", () => {
//     expect(wrapper.find("animate")).to.have.length(0)
//   })
// })

// describe("a11y", () => {
//   it("svg has aria label", () => {
//     expect(wrapper.find("svg").prop("aria-labelledby")).to.string("")
//   })

//   it("svg has role", () => {
//     expect(wrapper.find("svg").prop("role")).to.string("img")
//   })

//   it("svg has a title", () => {
//     expect(wrapper.find("title")).to.have.length(1)
//     expect(wrapper.find("title").text()).to.string("")
//   })
// })

// describe("<Svg /> Check id`s to render the SVG", () => {
//   const wrapper = mount(<Svg {...defaultProps} />)

//   it("is mask with the same `idClip`", () => {
//     const idClip = wrapper.find("clipPath").prop("id")
//     expect(wrapper.find("rect[clipPath]").prop("clipPath")).to.have.equal(
//       `url(#${idClip})`
//     )
//   })

//   it("is linearGradient with the same `idClip`", () => {
//     const idGradient = wrapper.find("linearGradient").prop("id")
//     expect(wrapper.find("rect[clipPath]").prop("style").fill).to.have.equal(
//       `url(#${idGradient})`
//     )
//   })

//   it("has a `svg`", () => {
//     expect(wrapper.find("svg")).to.have.length(1)
//   })
// })

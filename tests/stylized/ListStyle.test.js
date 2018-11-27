import React from "react"
import renderer from "react-test-renderer"

import ListStyle from "../../src/stylized/ListStyle"

describe("ListStyle", () => {
  const wrapper = renderer.create(
    <ListStyle uniquekey="ListStyle" speed={20} />
  )

  test("renders correctly", () => {
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test("props are propagated ", () => {
    expect(wrapper.root.props.speed).toEqual(20)
    expect(wrapper.root.props.uniquekey).toEqual("ListStyle")
  })
})

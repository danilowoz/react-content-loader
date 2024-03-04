import * as React from 'react'
import * as renderer from 'react-test-renderer'

import InstagramStyle from '../../presets/InstagramStyle'

describe('InstagramStyle', () => {
  const wrapper = renderer.create(
    <InstagramStyle uniqueKey="InstagramStyle" speed={20} />
  )

  test('renders correctly', () => {
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('props are propagated ', () => {
    expect(wrapper.root.props.speed).toEqual(20)
    expect(wrapper.root.props.uniqueKey).toEqual('InstagramStyle')
  })
})

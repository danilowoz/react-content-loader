import * as React from 'react'
import * as renderer from 'react-test-renderer'

import InstagramStyle from '../../stylized/InstagramStyle'

describe('InstagramStyle', () => {
  const wrapper = renderer.create(
    <InstagramStyle uniquekey="InstagramStyle" speed={20} />
  )

  test('renders correctly', () => {
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('props are propagated ', () => {
    expect(wrapper.root.props.speed).toEqual(20)
    expect(wrapper.root.props.uniquekey).toEqual('InstagramStyle')
  })
})

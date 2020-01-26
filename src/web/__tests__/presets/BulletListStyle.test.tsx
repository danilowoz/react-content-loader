import * as React from 'react'
import * as renderer from 'react-test-renderer'

import BulletListStyle from '../../presets/BulletListStyle'

describe('BulletListStyle', () => {
  const wrapper = renderer.create(
    <BulletListStyle uniqueKey="BulletListStyle" speed={20} />
  )

  test('renders correctly', () => {
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('props are propagated ', () => {
    expect(wrapper.root.props.speed).toEqual(20)
    expect(wrapper.root.props.uniqueKey).toEqual('BulletListStyle')
  })
})

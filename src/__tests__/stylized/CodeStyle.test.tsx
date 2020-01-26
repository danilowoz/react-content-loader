import * as React from 'react'
import * as renderer from 'react-test-renderer'

import CodeStyle from '../../stylized/CodeStyle'

describe('CodeStyle', () => {
  const wrapper = renderer.create(<CodeStyle id="CodeStyle" speed={20} />)

  test('renders correctly', () => {
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('props are propagated ', () => {
    expect(wrapper.root.props.speed).toEqual(20)
    expect(wrapper.root.props.id).toEqual('CodeStyle')
  })
})

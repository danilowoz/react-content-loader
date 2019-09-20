import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

import CodeStyle from '../../stylized/CodeStyle'

describe('CodeStyle', () => {
  const wrapper = renderer.create(
    <CodeStyle id="CodeStyle" animate={false} speed={20} />
  )

  test('renders correctly', () => {
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('props are propagated ', () => {
    expect(wrapper.root.props.speed).toEqual(20)
  })
})

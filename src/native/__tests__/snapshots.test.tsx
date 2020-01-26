import * as React from 'react'
import * as renderer from 'react-test-renderer'

import ContentLoader from '../ContentLoader'

describe('ContentLoader snapshots', () => {
  test('renders correctly the basic version', () => {
    const wrapper = renderer.create(
      <ContentLoader animate={false} uniqueKey="snapshots" />
    )
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with viewBox empty', () => {
    const wrapper = renderer.create(
      <ContentLoader animate={false} uniqueKey="snapshots" viewBox="" />
    )
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with viewBox defined', () => {
    const wrapper = renderer.create(
      <ContentLoader
        animate={false}
        uniqueKey="snapshots"
        viewBox="0 0 100 100"
      />
    )
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with viewBox defined and sizes defined too', () => {
    const wrapper = renderer.create(
      <ContentLoader
        animate={false}
        uniqueKey="snapshots"
        width={100}
        height={100}
        viewBox="0 0 100 100"
      />
    )
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })
})

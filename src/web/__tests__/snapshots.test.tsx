import * as React from 'react'
import * as renderer from 'react-test-renderer'

import ContentLoader from '../ContentLoader'

describe('ContentLoader snapshots', () => {
  test('renders correctly the basic version', () => {
    const wrapper = renderer.create(<ContentLoader uniqueKey="snapshots" />)
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with viewBox empty', () => {
    const wrapper = renderer.create(
      <ContentLoader uniqueKey="snapshots" viewBox="" />
    )
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with viewBox defined', () => {
    const wrapper = renderer.create(
      <ContentLoader uniqueKey="snapshots" viewBox="0 0 100 100" />
    )
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with viewBox defined and sizes defined too', () => {
    const wrapper = renderer.create(
      <ContentLoader
        uniqueKey="snapshots"
        width={100}
        height={100}
        viewBox="0 0 100 100"
      />
    )
    const tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders correctly with beforeMask', () => {
    let wrapper = renderer.create(
      <ContentLoader
        uniqueKey="snapshots"
        beforeMask={
          <>
            <rect role="outline1" />
            <rect role="outline2" />
          </>
        }
      >
        <rect />
      </ContentLoader>
    )
    let tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()

    // with wrong type
    wrapper = renderer.create(
      // @ts-ignore
      <ContentLoader uniqueKey="snapshots" beforeMask={() => <rect />}>
        <rect />
      </ContentLoader>
    )
    tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot()
  })
})

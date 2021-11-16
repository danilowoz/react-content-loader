import * as React from 'react'
import Svg, { ClipPath, LinearGradient, Stop } from 'react-native-svg'
import * as renderer from 'react-test-renderer'

import ContentLoader, { Rect } from '..'

interface IPredicateArgs {
  type: any
  props: any
}

describe('Svg', () => {
  const wrapper = renderer.create(<ContentLoader animate={false} />).root
  const predicateRectClipPath = ({ type, props }: IPredicateArgs) =>
    type === 'Rect' && props.clipPath
  const partsOfComponent = {
    allLinearGradient: wrapper.findAllByType(LinearGradient),
    allRectClipPath: wrapper.findAll(predicateRectClipPath),
    allStops: wrapper.findAllByType(Stop),
    clipPath: wrapper.findByType(ClipPath),
    linearGradient: wrapper.findByType(LinearGradient),
    rectClipPath: wrapper.find(predicateRectClipPath),
    svg: wrapper.findByType(Svg),
  }

  describe('it has basic elements necessary to work ', () => {
    it('has a `rect` with `clipPath`', () => {
      const { allRectClipPath } = partsOfComponent

      expect(allRectClipPath.length).toBe(1)
    })

    it('has a `linearGradient`', () => {
      const { allLinearGradient } = partsOfComponent

      expect(allLinearGradient.length).toBe(1)
    })

    it('has three `stop`', () => {
      const { allStops } = partsOfComponent

      expect(allStops.length).toBe(3)
    })

    it('has `stop` inside the `linearGradient`', () => {
      const { linearGradient } = partsOfComponent
      const stopsIntoLinearGradient = linearGradient.findAllByType(Stop)

      expect(stopsIntoLinearGradient.length).toBe(3)
    })
  })

  describe('unique key', () => {
    it('render two components with different ids', () => {
      // Wrapper
      const { clipPath, linearGradient } = partsOfComponent

      // Another component
      const anotherComp = renderer.create(<ContentLoader animate={false} />)
        .root
      const anotherClipPath = anotherComp.findByType(ClipPath)
      const anotherLinearGradient = anotherComp.findByType(LinearGradient)

      expect(clipPath.props.id).not.toBe(anotherClipPath.props.id)
      expect(linearGradient.props.id).not.toBe(anotherLinearGradient.props.id)
    })

    it('clipPath id and rect clipPath url are the same', () => {
      const { clipPath, rectClipPath } = partsOfComponent

      expect(rectClipPath.props.clipPath).toBe(`url(#${clipPath.props.id})`)
    })

    it('linearGradient id and rect clipPath fill are the same', () => {
      const { linearGradient, rectClipPath } = partsOfComponent

      expect(rectClipPath.props.fill).toBe(`url(#${linearGradient.props.id})`)
    })
  })

  describe('beforeMask', () => {
    it('beforeMask is used', () => {
      const wrapperWithBeforeMask = renderer.create(
        <ContentLoader beforeMask={<Rect x="123" />} />
      ).root

      const beforeMask = wrapperWithBeforeMask.findByProps({
        x: '123',
      })

      expect(beforeMask.props.x).toBe('123')
    })

    it('beforeMask should be a JSX Element', () => {
      const wrapperWithBeforeMask = renderer.create(
        // @ts-ignore
        <ContentLoader beforeMask={() => <Rect x="123" />} />
      ).root

      expect(() => {
        wrapperWithBeforeMask.findByProps({
          x: '123',
        })
      }).toThrow('No instances found with props: {"x":"123"}')
    })
  })
})

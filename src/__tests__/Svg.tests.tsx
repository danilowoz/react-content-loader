import * as React from 'react'
import * as renderer from 'react-test-renderer'

import Svg from '..'

interface IpredicateArgs {
  type: any
  props: any
}

describe('Svg', () => {
  const wrapper = renderer.create(<Svg />).root
  const predicateRectClipPath = ({ type, props }: IpredicateArgs) =>
    type === 'rect' && props.clipPath
  const partsOfComponent = {
    allLinearGradient: wrapper.findAllByType('linearGradient'),
    allRectClipPath: wrapper.findAll(predicateRectClipPath),
    allStops: wrapper.findAllByType('stop'),
    clipPath: wrapper.findByType('clipPath'),
    linearGradient: wrapper.findByType('linearGradient'),
    rectClipPath: wrapper.find(predicateRectClipPath),
    svg: wrapper.findByType('svg'),
    title: wrapper.findByType('title'),
  }

  it('baseUrl is used correctly', () => {
    const baseUrl = '/page-path'
    const wrapperWithBaseUrl = renderer.create(<Svg baseUrl={baseUrl} />).root

    const clipPath = wrapperWithBaseUrl.findByType('clipPath')
    const linearGradient = wrapperWithBaseUrl.findByType('linearGradient')
    const rectClipPath = wrapperWithBaseUrl.find(predicateRectClipPath)

    expect(rectClipPath.props.clipPath).toBe(
      `url(${baseUrl}#${clipPath.props.id})`
    )
    expect(rectClipPath.props.style.fill).toBe(
      `url(${baseUrl}#${linearGradient.props.id})`
    )
  })

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
      const stopsIntoLinearGradient = linearGradient.findAllByType('stop')

      expect(stopsIntoLinearGradient.length).toBe(3)
    })

    it('has one `animate` inside each `stop`', () => {
      const { allStops } = partsOfComponent

      allStops.forEach(stop => {
        const animate = stop.findAllByType('animate')
        expect(animate.length).toBe(1)
      })
    })
  })

  describe('unique key', () => {
    it('`uniquekey` does not generate undefined `id` values for SVG', () => {
      const { clipPath, linearGradient } = partsOfComponent

      expect(clipPath.props.id).not.toBe(undefined)
      expect(linearGradient.props.id).not.toBe(undefined)
    })

    it('custom `uniquekey` is used', () => {
      const uniquekey = 'my-unique-key'
      const wrapperUniqueKey = renderer.create(<Svg uniquekey={uniquekey} />)

      const clipPath = wrapperUniqueKey.root.findByType('clipPath')
      const linearGradient = wrapperUniqueKey.root.findByType('linearGradient')

      expect(clipPath.props.id).toBe(`${uniquekey}-idClip`)
      expect(linearGradient.props.id).toBe(`${uniquekey}-idGradient`)
    })

    it('render two components with diferents ids', () => {
      // Wrapper
      const { clipPath, linearGradient } = partsOfComponent

      // Another component
      const anotherComp = renderer.create(<Svg />).root
      const anotherClipPath = anotherComp.findByType('clipPath')
      const anotherLinearGradient = anotherComp.findByType('linearGradient')

      expect(clipPath.props.id).not.toBe(anotherClipPath.props.id)
      expect(linearGradient.props.id).not.toBe(anotherLinearGradient.props.id)
    })

    it('clipPath id and rect clipPath url are the same', () => {
      const { clipPath, rectClipPath } = partsOfComponent

      expect(rectClipPath.props.clipPath).toBe(`url(#${clipPath.props.id})`)
    })

    it('linearGradient id and rect clipPath fill are the same', () => {
      const { linearGradient, rectClipPath } = partsOfComponent

      expect(rectClipPath.props.style.fill).toBe(
        `url(#${linearGradient.props.id})`
      )
    })
  })

  describe('a11y', () => {
    it('svg has aria-label', () => {
      const { svg } = partsOfComponent

      expect(typeof svg.props['aria-labelledby']).toBe('string')
      expect(svg.props['aria-labelledby'].length).not.toBe(0)
    })

    it('svg has role', () => {
      const { svg } = partsOfComponent
      const role = 'role'
      expect(typeof svg.props[role]).toBe('string')
      expect(svg.props[role]).toBe('img')
    })

    it('svg has a title', () => {
      const { title } = partsOfComponent

      expect(typeof title.props.children).toBe('string')
      expect(title.props.children.length).not.toBe(0)
    })
  })
})

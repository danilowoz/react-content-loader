import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as ShallowRenderer from 'react-test-renderer/shallow'

import ContentLoader from '../Holder'

describe('Holder', () => {
  describe('when type is custom', () => {
    const customWrapper = renderer.create(
      <ContentLoader>
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="82" y="44" rx="3" ry="3" width="250" height="10" />
        <circle cx="35" cy="35" r="35" />
      </ContentLoader>
    ).root

    it('should render custom element', () => {
      const rect = customWrapper.findAllByType('rect')
      const circle = customWrapper.findAllByType('circle')

      expect(rect.length).toBe(3)
      expect(circle.length).toBe(1)
    })
  })

  describe('Props are propagated', () => {
    const noPropsComponent = ShallowRenderer.createRenderer()
    noPropsComponent.render(<ContentLoader />)

    const withPropsComponent = ShallowRenderer.createRenderer()
    withPropsComponent.render(
      <ContentLoader
        animate={false}
        ariaLabel="My custom loading title"
        baseUrl="/mypage"
        className="random-className"
        gradientRatio={0.5}
        height={200}
        interval={0.5}
        preserveAspectRatio="xMaxYMax meet"
        primaryColor="#000"
        primaryOpacity={0.06}
        rtl
        secondaryColor="#fff"
        secondaryOpacity={0.12}
        speed={10}
        style={{ marginBottom: '10px' }}
        width={200}
      />
    )

    const { props: propsFromEmpty } = noPropsComponent.getRenderOutput()
    const { props: propsFromFullfield } = withPropsComponent.getRenderOutput()

    it("`speed` is a number and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.speed).toBe('number')
      expect(propsFromEmpty.speed).toBe(2)
      // custom props
      expect(typeof propsFromFullfield.speed).toBe('number')
      expect(propsFromFullfield.speed).toBe(10)
    })

    it("`interval` is a number and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.interval).toBe('number')
      expect(propsFromEmpty.interval).toBe(0.25)
      // custom props
      expect(typeof propsFromFullfield.interval).toBe('number')
      expect(propsFromFullfield.interval).toBe(0.5)
    })

    it("`height` is a number and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.height).toBe('number')
      expect(propsFromEmpty.height).toBe(130)
      // custom props
      expect(typeof propsFromFullfield.height).toBe('number')
      expect(propsFromFullfield.height).toBe(200)
    })

    it("`width` is a number and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.width).toBe('number')
      expect(propsFromEmpty.width).toBe(400)
      // custom props
      expect(typeof propsFromFullfield.width).toBe('number')
      expect(propsFromFullfield.width).toBe(200)
    })

    it("`gradientRatio` is a number and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.gradientRatio).toBe('number')
      expect(propsFromEmpty.gradientRatio).toBe(2)
      // custom props
      expect(typeof propsFromFullfield.gradientRatio).toBe('number')
      expect(propsFromFullfield.gradientRatio).toBe(0.5)
    })

    it("`animate` is a boolean and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.animate).toBe('boolean')
      expect(propsFromEmpty.animate).toBe(true)
      // custom props
      expect(typeof propsFromFullfield.animate).toBe('boolean')
      expect(propsFromFullfield.animate).toBe(false)
    })

    it("`primaryColor` is a string and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.primaryColor).toBe('string')
      expect(propsFromEmpty.primaryColor).toBe('#f0f0f0')
      // custom props
      expect(typeof propsFromFullfield.primaryColor).toBe('string')
      expect(propsFromFullfield.primaryColor).toBe('#000')
    })

    it("`secondaryColor` is a string and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.secondaryColor).toBe('string')
      expect(propsFromEmpty.secondaryColor).toBe('#e0e0e0')
      // custom props
      expect(typeof propsFromFullfield.secondaryColor).toBe('string')
      expect(propsFromFullfield.secondaryColor).toBe('#fff')
    })

    it("`primaryOpacity` is a number and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.primaryOpacity).toBe('number')
      expect(propsFromEmpty.primaryOpacity).toBe(1)
      // custom props
      expect(typeof propsFromFullfield.primaryOpacity).toBe('number')
      expect(propsFromFullfield.primaryOpacity).toBe(0.06)
    })

    it("`secondaryOpacity` is a number and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.secondaryOpacity).toBe('number')
      expect(propsFromEmpty.secondaryOpacity).toBe(1)
      // custom props
      expect(typeof propsFromFullfield.secondaryOpacity).toBe('number')
      expect(propsFromFullfield.secondaryOpacity).toBe(0.12)
    })

    it("`preserveAspectRatio` is a string and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.preserveAspectRatio).toBe('string')
      expect(propsFromEmpty.preserveAspectRatio).toBe('none')
      // custom props
      expect(typeof propsFromFullfield.preserveAspectRatio).toBe('string')
      expect(propsFromFullfield.preserveAspectRatio).toBe('xMaxYMax meet')
    })

    it("`style` is an object and it's used", () => {
      // defaultProps
      expect(propsFromEmpty.style).toMatchObject({})
      // custom props
      expect(propsFromFullfield.style).toMatchObject({ marginBottom: '10px' })
    })

    it("`rtl` is a boolean and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.rtl).toBe('boolean')
      expect(propsFromEmpty.rtl).toBe(false)
      // custom props
      expect(typeof propsFromFullfield.rtl).toBe('boolean')
      expect(propsFromFullfield.rtl).toBe(true)
    })

    it("`ariaLabel` is a string and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.ariaLabel).toBe('string')
      expect(propsFromEmpty.ariaLabel).toBe('Loading interface...')
      // custom props
      expect(typeof propsFromFullfield.ariaLabel).toBe('string')
      expect(propsFromFullfield.ariaLabel).toBe('My custom loading title')
    })

    it("`baseUrl` is a string and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.baseUrl).toBe('string')
      expect(propsFromEmpty.baseUrl).toBe('')
      // custom props
      expect(typeof propsFromFullfield.baseUrl).toBe('string')
      expect(propsFromFullfield.baseUrl).toBe('/mypage')
    })
  })
})

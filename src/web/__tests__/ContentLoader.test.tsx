import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as ShallowRenderer from 'react-test-renderer/shallow'

import ContentLoader from '../ContentLoader'

describe('ContentLoader', () => {
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
    noPropsComponent.render(
      <ContentLoader>
        <rect />
      </ContentLoader>
    )

    const withPropsComponent = ShallowRenderer.createRenderer()
    withPropsComponent.render(
      <ContentLoader
        animate={false}
        backgroundColor="#000"
        backgroundOpacity={0.06}
        baseUrl="/mypage"
        foregroundColor="#fff"
        foregroundOpacity={0.12}
        gradientRatio={0.5}
        gradientDirection="top-bottom"
        height={200}
        interval={0.5}
        preserveAspectRatio="xMaxYMax meet"
        rtl
        speed={10}
        style={{ marginBottom: '10px' }}
        title="My custom loading title"
        uniqueKey="my-id"
        width={200}
        beforeMask={<rect />}
        animateBegin="5s"
      >
        <rect />
      </ContentLoader>
    )

    const { props: propsFromFullfield } = withPropsComponent.getRenderOutput()

    it("`speed` is a number and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.speed).toBe('number')
      expect(propsFromFullfield.speed).toBe(10)
    })

    it("`interval` is a number and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.interval).toBe('number')
      expect(propsFromFullfield.interval).toBe(0.5)
    })

    it("`height` is a number and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.height).toBe('number')
      expect(propsFromFullfield.height).toBe(200)
    })

    it("`width` is a number and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.width).toBe('number')
      expect(propsFromFullfield.width).toBe(200)
    })

    it("`gradientRatio` is a number and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.gradientRatio).toBe('number')
      expect(propsFromFullfield.gradientRatio).toBe(0.5)
    })

    it("`gradientDirection` is a string and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.gradientDirection).toBe('string')
      expect(propsFromFullfield.gradientDirection).toBe('top-bottom')
    })

    it("`animate` is a boolean and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.animate).toBe('boolean')
      expect(propsFromFullfield.animate).toBe(false)
    })

    it("`backgroundColor` is a string and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.backgroundColor).toBe('string')
      expect(propsFromFullfield.backgroundColor).toBe('#000')
    })

    it("`foregroundColor` is a string and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.foregroundColor).toBe('string')
      expect(propsFromFullfield.foregroundColor).toBe('#fff')
    })

    it("`backgroundOpacity` is a number and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.backgroundOpacity).toBe('number')
      expect(propsFromFullfield.backgroundOpacity).toBe(0.06)
    })

    it("`foregroundOpacity` is a number and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.foregroundOpacity).toBe('number')
      expect(propsFromFullfield.foregroundOpacity).toBe(0.12)
    })

    it("`preserveAspectRatio` is a string and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.preserveAspectRatio).toBe('string')
      expect(propsFromFullfield.preserveAspectRatio).toBe('xMaxYMax meet')
    })

    it("`style` is an object and it's used", () => {
      // custom props
      expect(propsFromFullfield.style).toMatchObject({ marginBottom: '10px' })
    })

    it("`rtl` is a boolean and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.rtl).toBe('boolean')
      expect(propsFromFullfield.rtl).toBe(true)
    })

    it("`title` is a string and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.title).toBe('string')
      expect(propsFromFullfield.title).toBe('My custom loading title')
    })

    it("`baseUrl` is a string and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.baseUrl).toBe('string')
      expect(propsFromFullfield.baseUrl).toBe('/mypage')
    })

    it("`uniqueKey` is a string and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.uniqueKey).toBe('string')
      expect(propsFromFullfield.uniqueKey).toBe('my-id')
    })

    it("`beforeMask` is a JSX Element and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.beforeMask).toBe('object')
      expect(propsFromFullfield.beforeMask).toEqual(<rect />)
    })

    it("`animateBegin` is a string and it's used", () => {
      // custom props
      expect(typeof propsFromFullfield.animateBegin).toBe('string')
      expect(propsFromFullfield.animateBegin).toEqual('5s')
    })
  })
})

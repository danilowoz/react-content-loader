import * as React from 'react'
import { Animated } from 'react-native'
import * as renderer from 'react-test-renderer'
import * as ShallowRenderer from 'react-test-renderer/shallow'

import ContentLoader, { Circle, Rect } from '../ContentLoader'

jest.useFakeTimers()

describe('ContentLoader', () => {
  describe('when type is custom', () => {
    const customWrapper = renderer.create(
      <ContentLoader animate={false}>
        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <Rect x="82" y="44" rx="3" ry="3" width="250" height="10" />
        <Circle cx="35" cy="35" r="35" />
      </ContentLoader>
    ).root

    it('should render custom element', () => {
      const rect = customWrapper.findAllByType(Rect)
      const circle = customWrapper.findAllByType(Circle)

      expect(rect.length).toBe(3)
      expect(circle.length).toBe(1)
    })
  })

  describe('Props are propagated', () => {
    const noPropsComponent = ShallowRenderer.createRenderer()
    noPropsComponent.render(
      <ContentLoader>
        <Rect />
      </ContentLoader>
    )

    const withPropsComponent = ShallowRenderer.createRenderer()
    withPropsComponent.render(
      <ContentLoader
        animate={false}
        height={200}
        preserveAspectRatio="xMaxYMax meet"
        backgroundColor="#000"
        rtl
        foregroundColor="#fff"
        speed={10}
        style={{ marginBottom: '10px' }}
        width={200}
        beforeMask={<Rect />}
      >
        <Rect />
      </ContentLoader>
    )

    const { props: propsFromEmpty } = noPropsComponent.getRenderOutput()
    const { props: propsFromFullField } = withPropsComponent.getRenderOutput()

    it("`speed` is a number and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.speed).toBe('number')
      expect(propsFromEmpty.speed).toBe(1.2)
      // custom props
      expect(typeof propsFromFullField.speed).toBe('number')
      expect(propsFromFullField.speed).toBe(10)
    })

    it("`height` is a number and it's used", () => {
      // custom props
      expect(typeof propsFromFullField.height).toBe('number')
      expect(propsFromFullField.height).toBe(200)
    })

    it("`width` is a number and it's used", () => {
      // custom props
      expect(typeof propsFromFullField.width).toBe('number')
      expect(propsFromFullField.width).toBe(200)
    })

    it("`animate` is a boolean and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.animate).toBe('boolean')
      expect(propsFromEmpty.animate).toBe(true)
      // custom props
      expect(typeof propsFromFullField.animate).toBe('boolean')
      expect(propsFromFullField.animate).toBe(false)
    })

    it("`backgroundColor` is a string and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.backgroundColor).toBe('string')
      expect(propsFromEmpty.backgroundColor).toBe('#f5f6f7')
      // custom props
      expect(typeof propsFromFullField.backgroundColor).toBe('string')
      expect(propsFromFullField.backgroundColor).toBe('#000')
    })

    it("`foregroundColor` is a string and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.foregroundColor).toBe('string')
      expect(propsFromEmpty.foregroundColor).toBe('#eee')
      // custom props
      expect(typeof propsFromFullField.foregroundColor).toBe('string')
      expect(propsFromFullField.foregroundColor).toBe('#fff')
    })

    it("`preserveAspectRatio` is a string and it's used", () => {
      // custom props
      expect(typeof propsFromFullField.preserveAspectRatio).toBe('string')
      expect(propsFromFullField.preserveAspectRatio).toBe('xMaxYMax meet')
    })

    it("`style` is an object and it's used", () => {
      // defaultProps
      expect(propsFromEmpty.style).toMatchObject({})
      // custom props
      expect(propsFromFullField.style).toMatchObject({ marginBottom: '10px' })
    })

    it("`rtl` is a boolean and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.rtl).toBe('boolean')
      expect(propsFromEmpty.rtl).toBe(false)
      // custom props
      expect(typeof propsFromFullField.rtl).toBe('boolean')
      expect(propsFromFullField.rtl).toBe(true)
    })

    it("`beforeMask` is a JSX Element and it's used", () => {
      // defaultProps
      expect(typeof propsFromEmpty.beforeMask).toBe('object')
      expect(propsFromEmpty.beforeMask).toBe(null)
      // custom props
      expect(typeof propsFromFullField.beforeMask).toBe('object')
      expect(propsFromFullField.beforeMask).toEqual(<Rect />)
    })
  })

  describe('when using SVG', () => {
    describe('cleanup', () => {
      afterAll(() => {
        jest.useRealTimers()
      })

      it('cleans up animations when unmounted', () => {
        jest.useFakeTimers()
        const animationSpy = jest.spyOn(Animated, 'timing')

        const mockSpeed = 10
        const { unmount } = renderer.create(
          <ContentLoader animate={true} height={200} speed={mockSpeed}>
            <Rect />
          </ContentLoader>
        )

        jest.runTimersToTime(mockSpeed)
        unmount()
        jest.runTimersToTime(mockSpeed)

        expect(animationSpy).toHaveBeenCalledTimes(1)
      })
    })
  })
})

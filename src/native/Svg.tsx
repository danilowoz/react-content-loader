import React, { Component, isValidElement } from 'react'
import { Animated } from 'react-native'
import Svg, {
  ClipPath,
  Defs,
  LinearGradient,
  Rect as SvgRect,
  Stop,
} from 'react-native-svg'

import uid from '../shared/uid'
import { IContentLoaderProps } from './'
import Rect, { IRectProps } from './Rect'

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

class NativeSvg extends Component<IContentLoaderProps> {
  static defaultProps = {
    animate: true,
    backgroundColor: '#f5f6f7',
    backgroundOpacity: 1,
    foregroundColor: '#eee',
    foregroundOpacity: 1,
    rtl: false,
    speed: 1.2,
    interval: 0.25,
    style: {},
    beforeMask: null,
  }

  animatedValue = new Animated.Value(-1)

  fixedId = this.props.uniqueKey || uid()

  idClip = `${this.fixedId}-diff`

  idGradient = `${this.fixedId}-animated-diff`

  unmounted = false

  setAnimation = () => {
    // props.speed is in seconds as it is compatible with web
    // convert to milliseconds
    const durMs = this.props.speed * 1000
    const delay = durMs * this.props.interval

    Animated.timing(this.animatedValue, {
      toValue: 2,
      delay: delay,
      duration: durMs,
      useNativeDriver: true,
    }).start(() => {
      if (!this.unmounted && this.props.animate) {
        this.animatedValue.setValue(-1)
        this.setAnimation()
      }
    })
  }

  componentDidMount = () => {
    if (this.props.animate) {
      this.setAnimation()
    }
  }

  componentDidUpdate(prevProps: IContentLoaderProps) {
    if (!prevProps.animate && this.props.animate) {
      this.setAnimation()
    }
  }

  componentWillUnmount() {
    this.unmounted = true
  }

  render() {
    const {
      children,
      backgroundColor,
      backgroundOpacity,
      foregroundColor,
      foregroundOpacity,
      rtl,
      style,
      beforeMask,
      ...props
    } = this.props

    const clipChildren: React.ReactNode[] = []
    const overrideRects: Array<{
      element: React.ReactElement<IRectProps>
      foregroundColor: string
      backgroundColor: string
      idClip: string
      idGradient: string
    }> = []

    React.Children.forEach(children, child => {
      if (
        isValidElement(child) &&
        child.type === Rect &&
        (child.props.foregroundColor != null ||
          child.props.backgroundColor != null)
      ) {
        const index = overrideRects.length
        overrideRects.push({
          element: child,
          foregroundColor: child.props.foregroundColor ?? foregroundColor,
          backgroundColor: child.props.backgroundColor ?? backgroundColor,
          idClip: `${this.fixedId}-diff-override-${index}`,
          idGradient: `${this.fixedId}-animated-diff-override-${index}`,
        })
        return
      }

      clipChildren.push(child)
    })

    const x1Animation = this.animatedValue.interpolate({
      extrapolate: 'clamp',
      inputRange: [-1, 2],
      outputRange: ['-100%', '100%'],
    })

    const x2Animation = this.animatedValue.interpolate({
      extrapolate: 'clamp',
      inputRange: [-1, 2],
      outputRange: ['0%', '200%'],
    })

    const rtlStyle: object = rtl ? { transform: [{ rotateY: '180deg' }] } : {}
    const svgStyle = Object.assign(Object.assign({}, style), rtlStyle)

    // Remove unnecessary keys
    delete props.uniqueKey
    delete props.animate
    delete props.speed

    return (
      <Svg style={svgStyle} {...props}>
        {beforeMask && isValidElement(beforeMask) ? beforeMask : null}

        <SvgRect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${this.idClip})`}
          clipPath={`url(#${this.idGradient})`}
        />

        {overrideRects.map(override => (
          <SvgRect
            key={override.idClip}
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${override.idClip})`}
            clipPath={`url(#${override.idGradient})`}
          />
        ))}

        <Defs>
          <ClipPath id={this.idGradient}>{clipChildren}</ClipPath>

          {overrideRects.map(override => (
            <ClipPath id={override.idGradient} key={override.idGradient}>
              {override.element}
            </ClipPath>
          ))}

          <AnimatedLinearGradient
            id={this.idClip}
            x1={x1Animation}
            x2={x2Animation}
            y1={0}
            y2={0}
          >
            <Stop offset={0} stopColor={backgroundColor} stopOpacity={backgroundOpacity} />
            <Stop offset={0.5} stopColor={foregroundColor} stopOpacity={foregroundOpacity} />
            <Stop offset={1} stopColor={backgroundColor} stopOpacity={backgroundOpacity} />
          </AnimatedLinearGradient>

          {overrideRects.map(override => (
            <AnimatedLinearGradient
              id={override.idClip}
              key={override.idClip}
              x1={x1Animation}
              x2={x2Animation}
              y1={0}
              y2={0}
            >
              <Stop
                offset={0}
                stopColor={override.backgroundColor}
                stopOpacity={backgroundOpacity}
              />
              <Stop
                offset={0.5}
                stopColor={override.foregroundColor}
                stopOpacity={foregroundOpacity}
              />
              <Stop
                offset={1}
                stopColor={override.backgroundColor}
                stopOpacity={backgroundOpacity}
              />
            </AnimatedLinearGradient>
          ))}
        </Defs>
      </Svg>
    )
  }
}

export default NativeSvg

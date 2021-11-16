import React, { Component, isValidElement } from 'react'
import { Animated } from 'react-native'
import Svg, {
  ClipPath,
  Defs,
  LinearGradient,
  Rect,
  Stop,
} from 'react-native-svg'

import uid from '../shared/uid'
import { IContentLoaderProps } from './'

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

class NativeSvg extends Component<IContentLoaderProps> {
  static defaultProps = {
    animate: true,
    backgroundColor: '#f5f6f7',
    foregroundColor: '#eee',
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
      foregroundColor,
      rtl,
      style,
      beforeMask,
      ...props
    } = this.props

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

        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${this.idClip})`}
          clipPath={`url(#${this.idGradient})`}
        />

        <Defs>
          <ClipPath id={this.idGradient}>{children}</ClipPath>

          <AnimatedLinearGradient
            id={this.idClip}
            x1={x1Animation}
            x2={x2Animation}
            y1={0}
            y2={0}
          >
            <Stop offset={0} stopColor={backgroundColor} />
            <Stop offset={0.5} stopColor={foregroundColor} />
            <Stop offset={1} stopColor={backgroundColor} />
          </AnimatedLinearGradient>
        </Defs>
      </Svg>
    )
  }
}

export default NativeSvg

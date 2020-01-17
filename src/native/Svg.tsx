import React, { Component } from 'react'
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
import offsetValueBound from './offsetValueBound'

class NativeSvg extends Component<IContentLoaderProps, { offset: number }> {
  static defaultProps = {
    animate: true,
    height: 130,
    backgroundColor: '#f0f0f0',
    rtl: false,
    foregroundColor: '#e0e0e0',
    speed: 1,
    style: {},
    width: 400,
  }

  state = { offset: -1 }

  animatedValue = new Animated.Value(0)

  fixedId = this.props.uniqueKey || uid()

  idClip = `${this.fixedId}-diff`

  idGradient = `${this.fixedId}-animated-diff`

  setAnimation = () => {
    // Turn in seconds to keep compatible with web one
    const durInSeconds = this.props.speed * 1000

    Animated.timing(this.animatedValue, {
      toValue: 2,
      delay: durInSeconds,
      duration: durInSeconds,
      useNativeDriver: true,
    }).start(() => {
      this.animatedValue.setValue(-1)
      this.setAnimation()
    })
  }

  componentDidMount = () => {
    if (this.props.animate) {
      this.setAnimation()

      this.animatedValue.addListener(({ value }) => {
        this.setState({
          offset: value,
        })
      })
    }
  }

  componentWillUnmount = () => {
    if (this.props.animate) {
      this.animatedValue.removeAllListeners()
    }
  }

  render() {
    const {
      children,
      height,
      backgroundColor,
      foregroundColor,
      width,
      rtl,
      style,
      viewBox = `0 0 ${width} ${height}`,
      ...props
    } = this.props

    const offset1 = offsetValueBound(this.state.offset - 1)
    const offset2 = offsetValueBound(this.state.offset)
    const offset3 = offsetValueBound(this.state.offset + 1)

    const rtlStyle = rtl ? { transform: [{ rotateY: '180deg' }] } : {}
    const composedStyle = Object.assign(style, rtlStyle)
    const [_vbX, _vbY, vbWidth = width, vbHeight = height] = viewBox.split(' ')

    // Remove unnecessary keys
    delete props.uniqueKey
    delete props.animate
    delete props.speed

    return (
      <Svg
        style={composedStyle}
        width={width}
        height={height}
        viewBox={viewBox}
        {...props}
      >
        <Rect
          x="0"
          y="0"
          width={parseInt(vbWidth as string)}
          height={parseInt(vbHeight as string)}
          fill={`url(#${this.idClip})`}
          clipPath={`url(#${this.idGradient})`}
        />

        <Defs>
          <ClipPath id={this.idGradient}>{children}</ClipPath>

          <LinearGradient
            id={this.idClip}
            x1={'-100%'}
            y1={0}
            x2={'100%'}
            y2={0}
          >
            <Stop offset={offset1} stopColor={backgroundColor} />
            <Stop offset={offset2} stopColor={foregroundColor} />
            <Stop offset={offset3} stopColor={backgroundColor} />
          </LinearGradient>
        </Defs>
      </Svg>
    )
  }
}

export default NativeSvg

import React, { Component } from 'react'
import { Animated } from 'react-native'

import Svg, {
  ClipPath,
  Defs,
  LinearGradient,
  Rect,
  Stop,
} from 'react-native-svg'

import { IContentLoaderProps } from './'
import offsetValueBound from './offsetValueBound'
import uid from '../uid'

type RequiredIContentLoaderProps = IContentLoaderProps &
  Pick<
    Required<IContentLoaderProps>,
    | 'animate'
    | 'height'
    | 'preserveAspectRatio'
    | 'primaryColor'
    | 'rtl'
    | 'secondaryColor'
    | 'speed'
    | 'style'
    | 'width'
  >

interface State {
  offset: number
}

class NativeSvg extends Component<RequiredIContentLoaderProps, State> {
  state = { offset: -1 }

  animatedValue = new Animated.Value(0)

  idClip = this.props.id ? `${this.props.id}-idClip` : uid()

  idGradient = this.props.id ? `${this.props.id}-idGradient` : uid()

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

  render() {
    const {
      children,
      height,
      primaryColor,
      secondaryColor,
      width,
      rtl,
      style,
      ...props
    } = this.props

    const offset1 = offsetValueBound(this.state.offset - 1)
    const offset2 = offsetValueBound(this.state.offset)
    const offset3 = offsetValueBound(this.state.offset + 1)

    const rtlStyle = rtl ? { transform: [{ rotateY: '180deg' }] } : {}
    const composedStyle = { ...style, ...rtlStyle }

    // Remove unnecessary keys
    delete props.id
    delete props.animate
    delete props.speed

    return (
      <Svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        preserveAspectRatio="none"
        style={composedStyle}
        {...props}
      >
        <Rect
          x="0"
          y="0"
          width={width}
          height={height}
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
            <Stop offset={offset1} stopColor={primaryColor} />
            <Stop offset={offset2} stopColor={secondaryColor} />
            <Stop offset={offset3} stopColor={primaryColor} />
          </LinearGradient>
        </Defs>
      </Svg>
    )
  }
}

export default NativeSvg

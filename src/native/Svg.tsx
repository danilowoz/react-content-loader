import React, { useCallback } from 'react'
import { Animated } from 'react-native'

import Svg, {
  ClipPath,
  LinearGradient,
  Rect,
  Defs,
  Stop,
} from 'react-native-svg'

import offsetValueBound from './offsetValueBound'
import uid from './uid'
import { IContentLoaderProps } from './'

type RequiredIContentLoaderProps = Required<IContentLoaderProps>

export default ({
  animate,
  children,
  height,
  primaryColor,
  secondaryColor,
  speed,
  width,
}: RequiredIContentLoaderProps) => {
  const durInSeconds = speed * 1000 // transform to seconds to maintable the compatible with regular package
  const animatedValue = React.useRef(new Animated.Value(0)).current
  const [offset, setOffset] = React.useState(-1)

  const idClip = React.useRef(uid()).current
  const idGradient = React.useRef(uid()).current

  const setAnimation = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 2,
      delay: durInSeconds,
      duration: durInSeconds,
      useNativeDriver: true,
    }).start(() => {
      animatedValue.setValue(-1)
      setAnimation()
    })
  }, [animatedValue, durInSeconds])

  React.useEffect(() => {
    if (animate) {
      setAnimation()
    }
  }, [animate, animatedValue, setAnimation])

  animatedValue.addListener(({ value }) => {
    setOffset(value)
  })

  const offset1 = offsetValueBound(offset - 1)
  const offset2 = offsetValueBound(offset)
  const offset3 = offsetValueBound(offset + 1)

  return (
    <Svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      preserveAspectRatio="none"
    >
      <Rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill={`url(#${idClip})`}
        clipPath={`url(#${idGradient})`}
      />

      <Defs>
        <ClipPath id={idGradient}>{children}</ClipPath>

        <LinearGradient id={idClip} x1={'-100%'} y1={0} x2={'100%'} y2={0}>
          <Stop offset={offset1} stopColor={primaryColor} />
          <Stop offset={offset2} stopColor={secondaryColor} />
          <Stop offset={offset3} stopColor={primaryColor} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

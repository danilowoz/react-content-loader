import * as React from 'react'
export { Circle, Rect } from 'react-native-svg'

import Svg from './Svg'
import { IContentLoaderProps } from './'

type DefaultProps = Pick<
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

export const defaultProps: DefaultProps = {
  animate: true,
  height: 130,
  preserveAspectRatio: 'none',
  primaryColor: '#f0f0f0',
  rtl: false,
  secondaryColor: '#e0e0e0',
  speed: 1,
  style: {},
  width: 400,
}

const ContentLoader = (props: IContentLoaderProps) => {
  const mergedProps = { ...defaultProps, ...props }
  const children = props.children ? props.children : null

  return <Svg {...mergedProps}>{children}</Svg>
}

export default ContentLoader

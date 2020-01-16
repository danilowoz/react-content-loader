import * as React from 'react'
import { Circle, Rect } from 'react-native-svg'

import Svg from './Svg'
import { IContentLoaderProps } from './'

type DefaultProps = Pick<
  Required<IContentLoaderProps>,
  | 'animate'
  | 'height'
  | 'preserveAspectRatio'
  | 'backgroundColor'
  | 'rtl'
  | 'foregroundColor'
  | 'speed'
  | 'style'
  | 'width'
>

export const defaultProps: DefaultProps = {
  animate: true,
  height: 130,
  preserveAspectRatio: 'none',
  backgroundColor: '#f0f0f0',
  rtl: false,
  foregroundColor: '#e0e0e0',
  speed: 1,
  style: {},
  width: 400,
}

const InitialComponent: React.FC<IContentLoaderProps> = props => (
  <Rect x="0" y="0" rx="5" ry="5" width={props.width} height={props.height} />
)

const ContentLoader = (props: IContentLoaderProps) => {
  const mergedProps = { ...defaultProps, ...props }

  return (
    <Svg {...mergedProps}>
      {props.children || <InitialComponent {...mergedProps} />}
    </Svg>
  )
}

export { Circle, Rect }

export default ContentLoader

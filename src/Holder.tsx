import * as React from 'react'

import Svg from './Svg'
import { IContentLoaderProps } from './'

export const defaultProps: IContentLoaderProps = {
  animate: true,
  backgroundColor: '#f0f0f0',
  backgroundOpacity: 1,
  baseUrl: '',
  foregroundColor: '#e0e0e0',
  foregroundOpacity: 1,
  gradientRatio: 2,
  height: 130,
  interval: 0.25,
  rtl: false,
  speed: 2,
  style: {},
  title: 'Loading...',
  width: 400,
}

const InitialComponent: React.FC<IContentLoaderProps> = props => (
  <rect x="0" y="0" rx="5" ry="5" width={props.width} height={props.height} />
)

const ContentLoader = (props: IContentLoaderProps) => {
  const mergedProps = { ...defaultProps, ...props }

  return (
    <Svg {...mergedProps}>
      {props.children || <InitialComponent {...mergedProps} />}
    </Svg>
  )
}

export default ContentLoader

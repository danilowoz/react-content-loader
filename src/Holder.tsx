import * as React from 'react'

import Svg from './Svg'
import { IContentLoaderProps } from './'

export const defaultProps: IContentLoaderProps = {
  animate: true,
  ariaLabel: 'Loading interface...',
  baseUrl: '',
  gradientRatio: 2,
  height: 130,
  interval: 0.25,
  preserveAspectRatio: 'none',
  primaryColor: '#f0f0f0',
  primaryOpacity: 1,
  rtl: false,
  secondaryColor: '#e0e0e0',
  secondaryOpacity: 1,
  speed: 2,
  style: {},
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

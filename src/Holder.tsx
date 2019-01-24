import * as React from 'react'
import Svg from './Svg'

import { IContentLoaderProps } from './interface'

export const defaultProps: IContentLoaderProps = {
  animate: true,
  ariaLabel: 'Loading interface...',
  height: 130,
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

const InitialComponent: React.FunctionComponent<
  IContentLoaderProps
> = props => (
  <rect x="0" y="0" rx="5" ry="5" width={props.width} height={props.height} />
)

export default (props: IContentLoaderProps) => {
  const mergedProps = { ...defaultProps, ...props }
  const children = props.children ? (
    props.children
  ) : (
    <InitialComponent {...mergedProps} />
  )

  return <Svg {...mergedProps}>{children}</Svg>
}

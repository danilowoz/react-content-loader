//@flow
import * as React from 'react'
import Wrap from './Wrap'

// Stylized
export { default as Facebook } from './stylized/FacebookStyle'
export { default as Instagram } from './stylized/InstagramStyle'
export { default as Code } from './stylized/CodeStyle'
export { default as List } from './stylized/ListStyle'
export { default as BulletList } from './stylized/BulletListStyle'

export type Props = {
  animate: boolean,
  speed: number,
  className: string,
  width: number,
  height: number,
  preserveAspectRatio: string,
  primaryColor: string,
  secondaryColor: string,
  primaryOpacity: number,
  secondaryOpacity: number,
  style: { [key: string]: any },
  uniquekey: string,
}

export const defaultProps = {
  animate: true,
  speed: 2,
  width: 400,
  height: 130,
  preserveAspectRatio: 'xMidYMid meet',
  primaryColor: '#f0f0f0',
  secondaryColor: '#e0e0e0',
  primaryOpacity: 1,
  secondaryOpacity: 1,
}

const InitialComponent = props => (
  <rect x="0" y="0" rx="5" ry="5" width={props.width} height={props.height} />
)

const ContentLoader = (props: Props) => {
  const mergedProps = { ...defaultProps, ...props }
  const children = props.children ? props.children : <InitialComponent {...mergedProps} />

  return <Wrap {...mergedProps}>{children}</Wrap>
}

export default ContentLoader

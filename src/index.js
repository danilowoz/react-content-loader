//@flow
import * as React from 'react'

import Wrap, { defaultProps } from './Wrap'
// Stylized
export { default as Facebook } from './stylized/FacebookStyle'
export { default as Instagram } from './stylized/InstagramStyle'
export { default as Code } from './stylized/CodeStyle'
export { default as List } from './stylized/ListStyle'
export { default as BulletList } from './stylized/BulletListStyle'

export type Props = {
  style: { [key: string]: any },
  type: string,
  speed: number,
  width: number,
  height: number,
  primaryColor: string,
  secondaryColor: string,
  preserveAspectRatio: string,
  className: string,
}

const ContentLoader = (props: Props) => {
  const mergedProps = { ...defaultProps, ...props }
  const children = props.children
    ? props.children
    : <rect x="0" y="0" rx="5" ry="5" width={mergedProps.width} height={mergedProps.height} />
  return <Wrap {...mergedProps}>{children}</Wrap>
}

export default ContentLoader

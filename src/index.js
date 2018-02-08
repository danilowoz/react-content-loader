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
  style: { [key: string]: any },
  type: string,
  animate: boolean,
  speed: number,
  width: number,
  height: number,
  primaryColor: string,
  secondaryColor: string,
  preserveAspectRatio: string,
  className: string,
  uniquekey: string,
}


const InitialComponent = props => (
  <rect x="0" y="0" rx="5" ry="5" width={props.width} height={props.height} />
)

const ContentLoader = (props: Props) => {
  const children = props.children || InitialComponent(props);

  return <Wrap {...props}>{children}</Wrap>
}

export default ContentLoader

import { SVGAttributes } from 'react'

import ContentLoader from './Holder'

export interface IContentLoaderProps extends SVGAttributes<SVGElement> {
  animate?: boolean
  ariaLabel?: string
  baseUrl?: string
  primaryColor?: string
  primaryOpacity?: number
  rtl?: boolean
  secondaryColor?: string
  secondaryOpacity?: number
  speed?: number
  interval?: number
  uniquekey?: string
  gradientRatio?: number
}

export { default as Facebook } from './stylized/FacebookStyle'
export { default as Instagram } from './stylized/InstagramStyle'
export { default as Code } from './stylized/CodeStyle'
export { default as List } from './stylized/ListStyle'
export { default as BulletList } from './stylized/BulletListStyle'

export default ContentLoader

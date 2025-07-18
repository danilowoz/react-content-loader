import { SVGAttributes, ReactElement } from 'react'

import ContentLoader from './ContentLoader'

export interface IContentLoaderProps extends SVGAttributes<SVGElement> {
  animate?: boolean
  backgroundColor?: string
  backgroundOpacity?: number
  baseUrl?: string
  foregroundColor?: string
  foregroundOpacity?: number
  gradientRatio?: number
  rtl?: boolean
  speed?: number
  title?: string
  uniqueKey?: string
  beforeMask?: ReactElement
}

export { default as Facebook } from './presets/FacebookStyle'
export { default as Instagram } from './presets/InstagramStyle'
export { default as Code } from './presets/CodeStyle'
export { default as List } from './presets/ListStyle'
export { default as BulletList } from './presets/BulletListStyle'

export default ContentLoader

import { SVGAttributes } from 'react'

import ContentLoader from './ContentLoader'

export interface IContentLoaderProps extends SVGAttributes<SVGElement> {
  animate?: boolean
  title?: string
  baseUrl?: string
  backgroundColor?: string
  backgroundOpacity?: number
  rtl?: boolean
  foregroundColor?: string
  foregroundOpacity?: number
  speed?: number
  interval?: number
  id?: string
  gradientRatio?: number
}

export { default as Facebook } from './presets/FacebookStyle'
export { default as Instagram } from './presets/InstagramStyle'
export { default as Code } from './presets/CodeStyle'
export { default as List } from './presets/ListStyle'
export { default as BulletList } from './presets/BulletListStyle'

export default ContentLoader

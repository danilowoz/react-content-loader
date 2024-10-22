import { SvgProps } from 'react-native-svg'

import ContentLoader from './ContentLoader'

export interface IContentLoaderProps extends SvgProps {
  animate?: boolean
  backgroundColor?: string
  backgroundOpacity?: number
  foregroundColor?: string
  foregroundOpacity?: number
  rtl?: boolean
  speed?: number
  interval?: number
  uniqueKey?: string
  beforeMask?: JSX.Element
}

export { default as Facebook } from './presets/FacebookStyle'
export { default as Instagram } from './presets/InstagramStyle'
export { default as Code } from './presets/CodeStyle'
export { default as List } from './presets/ListStyle'
export { default as BulletList } from './presets/BulletListStyle'

export { Circle, Rect, Path } from './ContentLoader'
export default ContentLoader

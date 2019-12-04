import ContentLoader from './Holder'

export interface IContentLoaderProps {
  animate?: boolean
  ariaLabel?: string
  children?: React.ReactNode
  baseUrl?: string
  className?: string
  height?: number
  preserveAspectRatio?:
    | 'none'
    | 'xMinYMin meet'
    | 'xMidYMin meet'
    | 'xMaxYMin meet'
    | 'xMinYMid meet'
    | 'xMidYMid meet'
    | 'xMaxYMid meet'
    | 'xMinYMax meet'
    | 'xMidYMax meet'
    | 'xMaxYMax meet'
    | 'xMinYMin slice'
    | 'xMidYMin slice'
    | 'xMaxYMin slice'
    | 'xMinYMid slice'
    | 'xMidYMid slice'
    | 'xMaxYMid slice'
    | 'xMinYMax slice'
    | 'xMidYMax slice'
    | 'xMaxYMax slice'
  primaryColor?: string
  primaryOpacity?: number
  rtl?: boolean
  secondaryColor?: string
  secondaryOpacity?: number
  speed?: number
  interval?: number
  style?: React.CSSProperties
  uniquekey?: string
  width?: number
  gradientRatio?: number
}

export { default as Facebook } from './stylized/FacebookStyle'
export { default as Instagram } from './stylized/InstagramStyle'
export { default as Code } from './stylized/CodeStyle'
export { default as List } from './stylized/ListStyle'
export { default as BulletList } from './stylized/BulletListStyle'

export default ContentLoader

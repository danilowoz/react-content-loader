export interface IContentLoaderProps {
  animate?: boolean
  ariaLabel?: string | boolean
  children?: React.ReactNode
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
}

export interface IContentLoaderProps {
  animate?: boolean
  children?: React.ReactNode
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
  id?: string
  primaryColor?: string
  rtl?: boolean
  secondaryColor?: string
  speed?: number
  style?: React.CSSProperties
  width?: number
}

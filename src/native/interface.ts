import { SvgProps } from 'react-native-svg'

export interface IContentLoaderProps extends SvgProps {
  animate?: boolean
  children?: React.ReactNode
  id?: string
  primaryColor?: string
  rtl?: boolean
  secondaryColor?: string
  speed?: number
}

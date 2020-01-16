import { SvgProps } from 'react-native-svg'

export interface IContentLoaderProps extends SvgProps {
  animate?: boolean
  children?: React.ReactNode
  id?: string
  backgroundColor?: string
  rtl?: boolean
  foregroundColor?: string
  speed?: number
}

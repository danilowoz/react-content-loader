import { SvgProps } from 'react-native-svg'

export interface IContentLoaderProps extends SvgProps {
  animate?: boolean
  id?: string
  backgroundColor?: string
  rtl?: boolean
  foregroundColor?: string
  speed?: number
}

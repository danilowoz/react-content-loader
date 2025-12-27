import * as React from 'react'
import { Rect as SvgRect } from 'react-native-svg'

export type IRectProps = React.ComponentProps<typeof SvgRect> & {
  foregroundColor?: string
  backgroundColor?: string
}

const Rect: React.FC<IRectProps> = ({
  foregroundColor,
  backgroundColor,
  ...props
}) => <SvgRect {...props} />

Rect.displayName = 'Rect'

export default Rect

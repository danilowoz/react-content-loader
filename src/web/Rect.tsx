import * as React from 'react'

export interface IRectProps extends React.SVGAttributes<SVGRectElement> {
  foregroundColor?: string
  backgroundColor?: string
}

const Rect: React.FC<IRectProps> = ({
  foregroundColor,
  backgroundColor,
  ...props
}) => <rect {...props} />

Rect.displayName = 'Rect'

export default Rect

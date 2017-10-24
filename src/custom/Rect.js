//@flow
import * as React from 'react'

type Props = {
  x: number,
  y: number,
  radius: number,
  width: number,
  height: number,
}

const Rect = (props: Props): React.Element<*> => {
  const { x = 0, y = 0, radius = 0, width = 50, height = 50 } = props
  return <rect x={x} y={y} rx={radius} ry={radius} width={width} height={height} />
}

export default Rect

//@flow
import * as React from 'react'

type Props = {
  x: number,
  y: number,
  radius: number,
}

const Circle = (props: Props): React.Element<*> => {
  const { x = 0, y = 0, radius = 50 } = props
  return <circle cx={x} cy={y} r={radius} />
}

export default Circle

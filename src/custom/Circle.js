import React from 'react'

const Circle = props => {
  const { x = 0, y = 0, radius = 50 } = props
  return <circle cx={x} cy={y} r={radius} />
}

export default Circle

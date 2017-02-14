import React from 'react';

const Rect = (props) => {
    const { x = 0, y = 0, radius = 0, width = 50, height = 50 } = props
    return <rect x={x} y={y} rx={radius} ry={radius} width={width} height={height} />
}

export default Rect
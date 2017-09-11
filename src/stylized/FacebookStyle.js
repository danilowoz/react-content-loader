import React from 'react'
import Wrap from '../Wrap'

const FacebookStyle = props => {
  return (
    <Wrap {...props}>
      <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />

      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />

      <rect x="0" y="80" rx="3" ry="3" width="350" height="10" />
      <rect x="0" y="100" rx="3" ry="3" width="400" height="10" />
      <rect x="0" y="120" rx="3" ry="3" width="360" height="10" />
    </Wrap>
  )
}

export default FacebookStyle

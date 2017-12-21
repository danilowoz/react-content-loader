//@flow
import * as React from 'react'
import Wrap from '../Wrap'
import type { WrapProps } from '../Wrap'

const FacebookStyle = (props: WrapProps): React.Element<*> => (
  <Wrap {...props}>
	<rect x="70" y="15.82" rx="4" ry="4" width="117" height="6.4" />
	<rect x="70" y="36.05" rx="3" ry="3" width="85" height="6.4" />
	<rect x="2" y="81" rx="3" ry="3" width="350" height="6.4" />
	<rect x="0" y="102.38" rx="3" ry="3" width="380" height="6.4" />
	<rect x="0" y="123.26" rx="3" ry="3" width="201.6" height="6.4" />
	<circle cx="30.284271247461902" cy="29.334271247461903" r="28.284271247461902" />
  </Wrap>
)

export default FacebookStyle

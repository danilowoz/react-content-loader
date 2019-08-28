import * as React from 'react'

import Holder, { Rect, Circle } from '../Holder'
import { IContentLoaderProps } from '../'

export default (props: IContentLoaderProps) => (
  <Holder {...props}>
    <Rect x="70" y="15" rx="4" ry="4" width="117" height="6" />
    <Rect x="70" y="35" rx="3" ry="3" width="85" height="6" />
    <Rect x="0" y="80" rx="3" ry="3" width="350" height="6" />
    <Rect x="0" y="100" rx="3" ry="3" width="380" height="6" />
    <Rect x="0" y="120" rx="3" ry="3" width="201" height="6" />
    <Circle cx="30" cy="30" r="30" />
  </Holder>
)

import * as React from 'react'

import Holder, { Rect, Circle } from '../Holder'
import { IContentLoaderProps } from '../interface'

export default (props: IContentLoaderProps) => (
  <Holder {...props}>
    <Circle cx="10" cy="20" r="8" />
    <Rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
    <Circle cx="10" cy="50" r="8" />
    <Rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
    <Circle cx="10" cy="80" r="8" />
    <Rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
    <Circle cx="10" cy="110" r="8" />
    <Rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
  </Holder>
)

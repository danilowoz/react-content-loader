import * as React from 'react'

import Holder, { Rect, Circle } from '../Holder'
import { IContentLoaderProps } from '../'

const ReactContentLoaderInstagram: React.FC<IContentLoaderProps> = props => (
  <Holder {...props} height={480}>
    <Circle cx="30" cy="30" r="30" />

    <Rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
    <Rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
    <Rect x="0" y="70" rx="5" ry="5" width="400" height="400" />
  </Holder>
)

export default ReactContentLoaderInstagram

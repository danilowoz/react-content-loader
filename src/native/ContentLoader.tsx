import * as React from 'react'
import { Circle, Rect } from 'react-native-svg'

import { IContentLoaderProps } from '.'
import Svg from './Svg'

const ContentLoader: React.FC<IContentLoaderProps> = props => (
  <Svg {...props}>
    {props.children || (
      <Rect
        x="0"
        y="0"
        rx="5"
        ry="5"
        width={props.width}
        height={props.height}
      />
    )}
  </Svg>
)

export { Circle, Rect }

export default ContentLoader

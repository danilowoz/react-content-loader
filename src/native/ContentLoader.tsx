import * as React from 'react'
import { Circle, Rect } from 'react-native-svg'

import { IContentLoaderProps } from '.'
import Svg from './Svg'

export const defaultProps: IContentLoaderProps = {
  animate: true,
  height: 130,
  backgroundColor: '#f0f0f0',
  rtl: false,
  foregroundColor: '#e0e0e0',
  speed: 1,
  style: {},
  width: 400,
}

const ContentLoader: React.FC<IContentLoaderProps> = props => {
  return (
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
}

export { Circle, Rect }

export default ContentLoader

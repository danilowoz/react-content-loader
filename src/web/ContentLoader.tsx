import * as React from 'react'

import { IContentLoaderProps } from '.'
import Svg from './Svg'

const ContentLoader = (props: IContentLoaderProps) => {
  return (
    <Svg {...props}>
      {props.children || (
        <rect
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

export default ContentLoader

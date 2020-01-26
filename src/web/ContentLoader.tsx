import * as React from 'react'

import { Facebook, IContentLoaderProps } from '.'
import Svg from './Svg'

const ContentLoader: React.FC<IContentLoaderProps> = props =>
  props.children ? <Svg {...props}></Svg> : <Facebook {...props} />

export default ContentLoader

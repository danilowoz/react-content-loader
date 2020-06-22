import * as React from 'react'
import { Circle, Path, Rect } from 'react-native-svg'

import { Facebook, IContentLoaderProps } from '.'
import Svg from './Svg'

const ContentLoader: React.FC<IContentLoaderProps> = props =>
  props.children ? <Svg {...props} /> : <Facebook {...props} />

export { Circle, Rect, Path }

export default ContentLoader

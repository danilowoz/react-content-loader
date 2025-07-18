import * as React from 'react'
import { IContentLoaderProps } from '..'
import ContentLoader, { Circle, Rect } from '../ContentLoader'

const ReactContentLoaderBulletList: React.FC<IContentLoaderProps> = props => (
  <ContentLoader viewBox="0 0 245 125" width={245} height={125} {...props}>
    <Circle cx="10" cy="20" r="8" />
    <Rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
    <Circle cx="10" cy="50" r="8" />
    <Rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
    <Circle cx="10" cy="80" r="8" />
    <Rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
    <Circle cx="10" cy="110" r="8" />
    <Rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
  </ContentLoader>
)

export default ReactContentLoaderBulletList

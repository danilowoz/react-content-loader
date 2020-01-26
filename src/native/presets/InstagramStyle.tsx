import * as React from 'react'

import { IContentLoaderProps } from '..'
import ContentLoader, { Circle, Rect } from '../ContentLoader'

const ReactContentLoaderInstagram: React.FC<IContentLoaderProps> = props => (
  <ContentLoader viewBox="0 0 400 460" width={400} height={460} {...props}>
    <Circle cx="31" cy="31" r="15" />
    <Rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
    <Rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
    <Rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
)

export default ReactContentLoaderInstagram

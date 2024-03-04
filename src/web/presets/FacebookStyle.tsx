import * as React from 'react'

import { IContentLoaderProps } from '..'
import ContentLoader from '../ContentLoader'

const ReactContentLoaderFacebook: React.FC<IContentLoaderProps> = props => (
  <ContentLoader viewBox="0 0 476 124" {...props}>
    <rect x="48" y="8" width="88" height="6" rx="3" />
    <rect x="48" y="26" width="52" height="6" rx="3" />
    <rect x="0" y="56" width="410" height="6" rx="3" />
    <rect x="0" y="72" width="380" height="6" rx="3" />
    <rect x="0" y="88" width="178" height="6" rx="3" />
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
)

export default ReactContentLoaderFacebook

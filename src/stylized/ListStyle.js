//@flow
import * as React from 'react'
import ContentLoader from '../index'
import type { WrapProps } from '../Wrap'

const ListStyle = (props: WrapProps): React.Element<*> => (
  <ContentLoader {...props}>
    <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
    <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
    <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
    <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
    <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
    <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
  </ContentLoader>
)

export default ListStyle

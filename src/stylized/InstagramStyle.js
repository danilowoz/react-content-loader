// @flow
import * as React from "react"
import ContentLoader from "../index"
import type { WrapProps } from "../Wrap"

const InstagramStyle = (props: WrapProps): React.Element<*> => (
  <ContentLoader {...props} height={480}>
    <circle cx="30" cy="30" r="30" />

    <rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
    <rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
    <rect x="0" y="70" rx="5" ry="5" width="400" height="400" />
  </ContentLoader>
)

export default InstagramStyle

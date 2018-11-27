// @flow
import * as React from "react"
import Holder from "../Holder"
import type { SvgProps } from "../Svg"

const InstagramStyle = (props: SvgProps): React.Element<*> => (
  <Holder {...props} height={480}>
    <circle cx="30" cy="30" r="30" />

    <rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
    <rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
    <rect x="0" y="70" rx="5" ry="5" width="400" height="400" />
  </Holder>
)

export default InstagramStyle

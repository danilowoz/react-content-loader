// @flow
import * as React from "react"
import Svg from "./Svg"

export type Props = {
  animate: boolean,
  className: string,
  height: number,
  preserveAspectRatio: string,
  primaryColor: string,
  primaryOpacity: number,
  rtl: boolean,
  secondaryColor: string,
  secondaryOpacity: number,
  speed: number,
  style: { [key: string]: any },
  uniquekey: string,
  width: number
}

export const defaultProps = {
  animate: true,
  height: 130,
  preserveAspectRatio: "xMidYMid meet",
  primaryColor: "#f0f0f0",
  primaryOpacity: 1,
  rtl: false,
  secondaryColor: "#e0e0e0",
  secondaryOpacity: 1,
  speed: 2,
  width: 400
}

const InitialComponent = props => (
  <rect x="0" y="0" rx="5" ry="5" width={props.width} height={props.height} />
)

export default (props: Props) => {
  const mergedProps = { ...defaultProps, ...props }
  const children = props.children ? (
    props.children
  ) : (
    <InitialComponent {...mergedProps} />
  )

  return <Svg {...mergedProps}>{children}</Svg>
}

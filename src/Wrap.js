// @flow
import * as React from "react"

import uid from "./uid"
import type { Props as ContentLoaderProps } from "./index"

export type WrapProps = {
  children?: React.ChildrenArray<*>
} & ContentLoaderProps

const Wrap = (props: WrapProps): React.Element<*> => {
  const idClip = props.uniquekey ? `${props.uniquekey}-idClip` : uid()
  const idGradient = props.uniquekey ? `${props.uniquekey}-idGradient` : uid()

  const defautlDirection = ["-3; 1", "-2; 2", "-1; 3"]
  const rtlDirection = ["1; -3", "2; -2", "3; -1"]

  const direction = props.rtl ? rtlDirection : defautlDirection

  return (
    <svg
      viewBox={`0 0 ${props.width} ${props.height}`}
      style={props.style}
      preserveAspectRatio={props.preserveAspectRatio}
      className={props.className}
    >
      <rect
        style={{ fill: `url(#${idGradient})` }}
        clipPath={`url(#${idClip})`}
        x="0"
        y="0"
        width={props.width}
        height={props.height}
      />

      <defs>
        <clipPath id={idClip}>{props.children}</clipPath>

        <linearGradient id={idGradient}>
          <stop
            offset="0%"
            stopColor={props.primaryColor}
            stopOpacity={props.primaryOpacity}
          >
            {props.animate && (
              <animate
                attributeName="offset"
                values={direction[0]}
                dur={`${props.speed}s`}
                repeatCount="indefinite"
              />
            )}
          </stop>

          <stop
            offset="50%"
            stopColor={props.secondaryColor}
            stopOpacity={props.secondaryOpacity}
          >
            {props.animate && (
              <animate
                attributeName="offset"
                values={direction[1]}
                dur={`${props.speed}s`}
                repeatCount="indefinite"
              />
            )}
          </stop>

          <stop
            offset="100%"
            stopColor={props.primaryColor}
            stopOpacity={props.primaryOpacity}
          >
            {props.animate && (
              <animate
                attributeName="offset"
                values={direction[2]}
                dur={`${props.speed}s`}
                repeatCount="indefinite"
              />
            )}
          </stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Wrap

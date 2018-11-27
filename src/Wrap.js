// @flow
import * as React from "react"

import uid from "./uid"
import type { Props as ContentLoaderProps } from "./index"

export type WrapProps = {
  children?: React.ChildrenArray<*>
} & ContentLoaderProps

export default ({
  animate,
  children,
  className,
  height,
  preserveAspectRatio,
  primaryColor,
  primaryOpacity,
  rtl,
  secondaryColor,
  secondaryOpacity,
  speed,
  style,
  uniquekey,
  width,
  ...props
}: WrapProps): React.Element<*> => {
  const idClip = uniquekey ? `${uniquekey}-idClip` : uid()
  const idGradient = uniquekey ? `${uniquekey}-idGradient` : uid()

  const defautlAnimation = ["-3; 1", "-2; 2", "-1; 3"]
  const rtlAnimation = ["1; -3", "2; -2", "3; -1"]

  const animationValues = rtl ? rtlAnimation : defautlAnimation

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={style}
      preserveAspectRatio={preserveAspectRatio}
      className={className}
      {...props}
    >
      <rect
        style={{ fill: `url(#${idGradient})` }}
        clipPath={`url(#${idClip})`}
        x="0"
        y="0"
        width={width}
        height={height}
      />

      <defs>
        <clipPath id={idClip}>{children}</clipPath>

        <linearGradient id={idGradient}>
          <stop
            offset="0%"
            stopColor={primaryColor}
            stopOpacity={primaryOpacity}
          >
            {animate && (
              <animate
                attributeName="offset"
                values={animationValues[0]}
                dur={`${speed}s`}
                repeatCount="indefinite"
              />
            )}
          </stop>

          <stop
            offset="50%"
            stopColor={secondaryColor}
            stopOpacity={secondaryOpacity}
          >
            {animate && (
              <animate
                attributeName="offset"
                values={animationValues[1]}
                dur={`${speed}s`}
                repeatCount="indefinite"
              />
            )}
          </stop>

          <stop
            offset="100%"
            stopColor={primaryColor}
            stopOpacity={primaryOpacity}
          >
            {animate && (
              <animate
                attributeName="offset"
                values={animationValues[2]}
                dur={`${speed}s`}
                repeatCount="indefinite"
              />
            )}
          </stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

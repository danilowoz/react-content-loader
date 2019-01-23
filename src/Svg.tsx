import * as React from 'react'

import { IContentLoaderProps } from './interface'
import uid from './uid'

export default ({
  rtl,
  speed,
  style,
  width,
  height,
  animate,
  ariaLabel,
  children,
  className,
  uniquekey,
  primaryColor,
  primaryOpacity,
  secondaryColor,
  secondaryOpacity,
  preserveAspectRatio,
  ...props
}: IContentLoaderProps) => {
  const idClip = uniquekey ? `${uniquekey}-idClip` : uid()
  const idGradient = uniquekey ? `${uniquekey}-idGradient` : uid()
  const rtlStyle = rtl ? { transform: 'scaleX(-1)' } : {}

  return (
    <svg
      role="img"
      style={{ ...style, ...rtlStyle }}
      className={className}
      aria-labelledby={ariaLabel ? ariaLabel : null}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio={preserveAspectRatio}
      {...props}
    >
      {ariaLabel ? <title>{ariaLabel}</title> : null}
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        clipPath={`url(#${idClip})`}
        style={{ fill: `url(#${idGradient})` }}
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
                values="-3; 1"
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
                values="-2; 2"
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
                values="-1; 3"
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

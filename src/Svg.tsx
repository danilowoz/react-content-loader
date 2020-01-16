import * as React from 'react'

import { IContentLoaderProps } from './'
import uid from './uid'

export default ({
  rtl,
  speed,
  interval,
  style,
  width,
  height,
  baseUrl,
  gradientRatio,
  animate,
  ariaLabel,
  children,
  className,
  uniquekey,
  backgroundColor,
  backgroundOpacity,
  foregroundColor,
  foregroundOpacity,
  preserveAspectRatio,
  ...props
}: IContentLoaderProps) => {
  const idClip = uniquekey ? `${uniquekey}-idClip` : uid()
  const idGradient = uniquekey ? `${uniquekey}-idGradient` : uid()
  const rtlStyle = rtl ? { transform: 'scaleX(-1)' } : {}
  const keyTimes = `0; ${interval}; 1`
  const dur = `${speed}s`

  return (
    <svg
      role="img"
      style={{ ...style, ...rtlStyle }}
      className={className}
      aria-label={ariaLabel ? ariaLabel : null}
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
        clipPath={`url(${baseUrl}#${idClip})`}
        style={{ fill: `url(${baseUrl}#${idGradient})` }}
      />

      <defs>
        <clipPath id={idClip}>{children}</clipPath>

        <linearGradient id={idGradient}>
          <stop
            offset="0%"
            stopColor={backgroundColor}
            stopOpacity={backgroundOpacity}
          >
            {animate && (
              <animate
                attributeName="offset"
                values={`${-gradientRatio}; ${-gradientRatio}; 1`}
                keyTimes={keyTimes}
                dur={dur}
                repeatCount="indefinite"
              />
            )}
          </stop>

          <stop
            offset="50%"
            stopColor={foregroundColor}
            stopOpacity={foregroundOpacity}
          >
            {animate && (
              <animate
                attributeName="offset"
                values={`${-gradientRatio / 2}; ${-gradientRatio / 2}; ${1 +
                  gradientRatio / 2}`}
                keyTimes={keyTimes}
                dur={dur}
                repeatCount="indefinite"
              />
            )}
          </stop>

          <stop
            offset="100%"
            stopColor={backgroundColor}
            stopOpacity={backgroundOpacity}
          >
            {animate && (
              <animate
                attributeName="offset"
                values={`0; 0; ${1 + gradientRatio}`}
                keyTimes={keyTimes}
                dur={dur}
                repeatCount="indefinite"
              />
            )}
          </stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

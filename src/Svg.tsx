import * as React from 'react'

import { IContentLoaderProps } from './'
import uid from './uid'

const SVG: React.FC<IContentLoaderProps> = ({
  rtl,
  speed,
  interval,
  style,
  width,
  height,
  baseUrl,
  gradientRatio,
  animate,
  title,
  children,
  id,
  backgroundColor,
  backgroundOpacity,
  foregroundColor,
  foregroundOpacity,
  ...props
}) => {
  const idClip = id ? `${id}-idClip` : uid()
  const idGradient = id ? `${id}-idGradient` : uid()
  const rtlStyle = rtl ? { transform: 'scaleX(-1)' } : {}
  const keyTimes = `0; ${interval}; 1`
  const dur = `${speed}s`

  return (
    <svg
      style={{ ...style, ...rtlStyle }}
      role="img"
      aria-labelledby={id}
      viewBox={`0 0 ${width} ${height}`}
      {...props}
    >
      {title ? <title id={id}>{title}</title> : null}
      <rect
        role="presentation"
        x="0"
        y="0"
        width={width}
        height={height}
        clipPath={`url(${baseUrl}#${idClip})`}
        style={{ fill: `url(${baseUrl}#${idGradient})` }}
      />

      <defs role="presentation">
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

export default SVG

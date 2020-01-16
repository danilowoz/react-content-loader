import * as React from 'react'

import uid from '../shared/uid'
import { IContentLoaderProps } from './'

const SVG: React.FC<IContentLoaderProps> = ({
  animate = true,
  backgroundColor = '#f0f0f0',
  backgroundOpacity = 1,
  baseUrl = '',
  children,
  foregroundColor = '#e0e0e0',
  foregroundOpacity = 1,
  gradientRatio = 2,
  height = 130,
  id = null,
  interval = 0.25,
  rtl = false,
  speed = 2,
  style = {},
  title = 'Loading...',
  width = 400,
  ...props
}) => {
  const idClip = id ? `${id}-diff` : uid()
  const idGradient = id ? `${id}-animated-diff` : uid()
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

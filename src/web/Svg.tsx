import * as React from 'react'

import uid from '../shared/uid'
import { IContentLoaderProps } from './'

const SVG: React.FC<IContentLoaderProps> = ({
  animate = true,
  backgroundColor = '#f5f6f7',
  backgroundOpacity = 1,
  baseUrl = '',
  children,
  foregroundColor = '#eee',
  foregroundOpacity = 1,
  gradientRatio = 2,
  uniqueKey,
  rtl = false,
  speed = 1.2,
  style = {},
  title = 'Loading...',
  beforeMask = null,
  ...props
}) => {
  const fixedId = uniqueKey || uid()
  const idClip = `${fixedId}-diff`
  const idGradient = `${fixedId}-animated-diff`
  const idAria = `${fixedId}-aria`

  const rtlStyle = rtl ? { transform: 'scaleX(-1)' } : null
  const dur = `${speed}s`

  const from = `${gradientRatio * -1} 0`
  const to = `${gradientRatio} 0`

  return (
    <svg
      aria-labelledby={idAria}
      role="img"
      style={{ ...style, ...rtlStyle }}
      {...props}
    >
      {title ? <title id={idAria}>{title}</title> : null}
      {beforeMask && React.isValidElement(beforeMask) ? beforeMask : null}
      <rect
        role="presentation"
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath={`url(${baseUrl}#${idClip})`}
        style={{ fill: `url(${baseUrl}#${idGradient})` }}
      />

      <defs>
        <clipPath id={idClip}>{children}</clipPath>

        <linearGradient
          id={idGradient}
          gradientTransform={`translate(${from})`}
        >
          <stop
            offset="0%"
            stopColor={backgroundColor}
            stopOpacity={backgroundOpacity}
          />

          <stop
            offset="50%"
            stopColor={foregroundColor}
            stopOpacity={foregroundOpacity}
          />

          <stop
            offset="100%"
            stopColor={backgroundColor}
            stopOpacity={backgroundOpacity}
          />

          {animate && (
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values={`${from}; 0 0; ${to}`}
              dur={dur}
              repeatCount="indefinite"
            />
          )}
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SVG

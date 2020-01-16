import * as React from 'react'

import uid from '../shared/uid'
import { IContentLoaderProps } from './'

const SVG: React.FC<IContentLoaderProps> = ({
  animate,
  backgroundColor,
  backgroundOpacity,
  baseUrl,
  children,
  foregroundColor,
  foregroundOpacity,
  gradientRatio,
  height,
  id,
  interval,
  rtl,
  speed,
  style,
  title,
  width,
  viewBox = `0 0 ${width} ${height}`,
  ...props
}) => {
  const fixedId = id || uid()
  const idClip = `${fixedId}-diff`
  const idGradient = `${fixedId}-animated-diff`
  const idAria = `${fixedId}-aria`

  const rtlStyle = rtl ? { transform: 'scaleX(-1)' } : null
  const keyTimes = `0; ${interval}; 1`
  const dur = `${speed}s`
  const [_vbX, _vbY, vbWidth = width, vbHeight = height] = viewBox.split(' ')

  return (
    <svg
      style={{ ...style, ...rtlStyle }}
      role="img"
      aria-labelledby={idAria}
      width={width}
      height={height}
      viewBox={viewBox}
      {...props}
    >
      {title ? <title id={idAria}>{title}</title> : null}
      <rect
        role="presentation"
        x="0"
        y="0"
        width={Number(vbWidth)}
        height={Number(vbHeight)}
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

SVG.defaultProps = {
  animate: true,
  backgroundColor: '#f0f0f0',
  backgroundOpacity: 1,
  baseUrl: '',
  foregroundColor: '#e0e0e0',
  foregroundOpacity: 1,
  gradientRatio: 2,
  height: 130,
  id: null,
  interval: 0.25,
  rtl: false,
  speed: 2,
  style: {},
  title: 'Loading...',
  width: 400,
}

export default SVG

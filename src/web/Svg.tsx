import * as React from 'react'

import uid from '../shared/uid'
import { IContentLoaderProps } from './'

const SVG: React.FC<IContentLoaderProps> = ({
  animate,
  animateBegin,
  backgroundColor,
  backgroundOpacity,
  baseUrl,
  children,
  foregroundColor,
  foregroundOpacity,
  gradientRatio,
  gradientDirection,
  uniqueKey,
  interval,
  rtl,
  speed,
  style,
  title,
  beforeMask,
  ...props
}) => {
  const fixedId = uniqueKey || uid()
  const idClip = `${fixedId}-diff`
  const idGradient = `${fixedId}-animated-diff`
  const idAria = `${fixedId}-aria`

  const rtlStyle = rtl ? { transform: 'scaleX(-1)' } : null
  const keyTimes = `0; ${interval}; 1`
  const dur = `${speed}s`
  const gradientTransform =
    gradientDirection === 'top-bottom' ? 'rotate(90)' : undefined

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

        <linearGradient id={idGradient} gradientTransform={gradientTransform}>
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
                begin={animateBegin}
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
                begin={animateBegin}
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
                begin={animateBegin}
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
  backgroundColor: '#f5f6f7',
  backgroundOpacity: 1,
  baseUrl: '',
  foregroundColor: '#eee',
  foregroundOpacity: 1,
  gradientRatio: 2,
  gradientDirection: 'left-right',
  id: null,
  interval: 0.25,
  rtl: false,
  speed: 1.2,
  style: {},
  title: 'Loading...',
  beforeMask: null,
}

export default SVG

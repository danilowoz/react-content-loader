import * as React from 'react'

import { IContentLoaderProps, IStop } from './interface'
import uid from './uid'

export default ({
  rtl,
  speed,
  interval,
  style,
  width,
  height,
  gradientRatio,
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
  stops,
  ...props
}: IContentLoaderProps) => {
  const idClip = uniquekey ? `${uniquekey}-idClip` : uid()
  const idGradient = uniquekey ? `${uniquekey}-idGradient` : uid()
  const rtlStyle = rtl ? { transform: 'scaleX(-1)' } : {}
  const keyTimes = `0; ${interval}; 1`
  const dur = `${speed}s`
  const stopPoints: IStop[] = stops || [
    { offset: 0, color: primaryColor, opacity: primaryOpacity },
    { offset: 0.5, color: secondaryColor, opacity: secondaryOpacity },
    { offset: 1, color: primaryColor, opacity: primaryOpacity },
  ]

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
          {stopPoints.map((stop, i) => (
            <stop
              key={i}
              offset={`${stop.offset * 100}%`}
              stopColor={stop.color}
              stopOpacity={stop.opacity != null ? stop.opacity : 1}
            >
              {animate && (
                <animate
                  attributeName="offset"
                  values={`${-gradientRatio *
                    (1 - stop.offset)}; ${-gradientRatio *
                    (1 - stop.offset)}; ${1 + gradientRatio * stop.offset}`}
                  keyTimes={keyTimes}
                  dur={dur}
                  repeatCount="indefinite"
                />
              )}
            </stop>
          ))}
        </linearGradient>
      </defs>
    </svg>
  )
}

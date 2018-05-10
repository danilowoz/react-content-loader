//@flow
import * as React from 'react'

import uid from './uid'
import type { Props as ContentLoaderProps } from './index'

export type WrapProps = {
  children?: React.ChildrenArray<*>,
} & ContentLoaderProps

const Wrap = (props: WrapProps): React.Element<*> => {
  const idClip = props.uniquekey ? `${props.uniquekey}-idClip` : uid()
  const idGradient = props.uniquekey ? `${props.uniquekey}-idGradient` : uid()

  return (
    <svg
      viewBox={`0 0 ${props.width} ${props.height}`}
      version="1.1"
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
          <stop offset="0%" stopColor={props.primaryColor} stopOpacity={props.primaryOpacity}>
            {props.animate ? (
              <animate
                attributeName="offset"
                values="-2; 1"
                dur={`${props.speed}s`}
                repeatCount="indefinite"
              />
            ) : null}
          </stop>
          <stop offset="50%" stopColor={props.secondaryColor} stopOpacity={props.secondaryOpacity}>
            {props.animate ? (
              <animate
                attributeName="offset"
                values="-1.5; 1.5"
                dur={`${props.speed}s`}
                repeatCount="indefinite"
              />
            ) : null}
          </stop>
          <stop offset="100%" stopColor={props.primaryColor} stopOpacity={props.primaryOpacity}>
            {props.animate ? (
              <animate
                attributeName="offset"
                values="-1; 2"
                dur={`${props.speed}s`}
                repeatCount="indefinite"
              />
            ) : null}
          </stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Wrap

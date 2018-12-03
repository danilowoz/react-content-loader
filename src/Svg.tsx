import * as React from "react";

import { IContentLoaderProps } from "./Holder";

import uid from "./uid";

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
  // tslint:disable-next-line:trailing-comma
  ...props
}: IContentLoaderProps) => {
  const idClip = uniquekey ? `${uniquekey}-idClip` : uid();
  const idGradient = uniquekey ? `${uniquekey}-idGradient` : uid();

  const defautlAnimation = ["-3; 1", "-2; 2", "-1; 3"];
  const rtlAnimation = ["1; -3", "2; -2", "3; -1"];

  const animationValues = rtl ? rtlAnimation : defautlAnimation;

  return (
    <svg
      role="img"
      style={style}
      className={className}
      aria-labelledby={ariaLabel}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio={preserveAspectRatio}
      {...props}
    >
      <title>{ariaLabel}</title>
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
  );
};

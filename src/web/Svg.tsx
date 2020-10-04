import * as React from 'react'

import uid from '../shared/uid'
import { IContentLoaderProps } from './'

const SVG: React.FC<IContentLoaderProps> = ({
  animate,
  backgroundColor,
  children,
  foregroundColor,
  gradientRatio,
  uniqueKey,
  delay,
  rtl,
  speed,
  style,
  title,
  ...props
}) => {
  const fixedId = uniqueKey || uid()
  const idMask = `${fixedId}-mask`
  const idElement = `${fixedId}-rcl`
  const idAria = `${fixedId}-aria`
  const idAnimation = `anim-${fixedId}`
  const rtlStyle = rtl ? { transform: 'scaleX(-1)' } : null

  const linearGradient = [3, 2, 1, 2, 3].map((value, index, arr) => {
    const isMiddle = arr.length / index > index - 1
    const offSet = Math.pow(gradientRatio, value)
    const position = 50 + offSet * (isMiddle ? -1 : 1)
    const clamp = Math.min(Math.max(position, 0), 100)

    // Color
    const center = [3, 4].includes(index + 1)
    const color = center ? foregroundColor : backgroundColor

    return `${color} ${clamp}%`
  })

  const animationDelay = (speed * 100) / (delay + speed)

  return (
    <>
      <svg
        aria-labelledby={idAria}
        role="img"
        style={{ ...style, ...rtlStyle }}
        data-rcl={idElement}
        {...props}
      >
        {title && <title id={idAria}>{title}</title>}

        <rect
          role="presentation"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="white"
          mask={`url(#${idMask})`}
        />

        <defs>
          <mask id={idMask}>
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            {children}
          </mask>
        </defs>
      </svg>
      <div
        dangerouslySetInnerHTML={{
          __html: `<style>
[data-rcl="${idElement}"] {
  background: linear-gradient(90deg, ${linearGradient});
  background-size: 400%;
  ${animate && `animation:  ${idAnimation} ${delay + speed}s linear infinite`};
}
${animate &&
  `@keyframes ${idAnimation} {
    0% { background-position: 100% 0% }
    ${animationDelay > 0 && `${animationDelay}% { background-position: 0% 0% }`}
    100% { background-position: 0% 0% }
}`}
</style>`,
        }}
      ></div>
    </>
  )
}

SVG.defaultProps = {
  animate: true,
  backgroundColor: '#f5f6f7',
  foregroundColor: '#eee',
  gradientRatio: 2,
  id: null,
  delay: 1,
  rtl: false,
  speed: 1.2,
  style: {},
  title: 'Loading...',
}

export default SVG

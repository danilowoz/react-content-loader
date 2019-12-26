import React from 'react'

import ContentLoader, { Facebook, Instagram } from '../src'

export default {
  title: 'React Content Loader',
}

/**
 * Animated
 */
export const animate = () => {
  return <Facebook animate={false} />
}

animate.story = {
  parameters: {
    notes: `##\`animate?: boolean\` 
    
    Defaults to \`true\`. Opt-out of animations with \`false\``,
  },
}

/**
 * Aria label
 */
export const ariaLabel = () => {
  return <Facebook ariaLabel="my custom loader" />
}

ariaLabel.story = {
  parameters: {
    notes: `## \`ariaLabel?: string | boolean\`

    Defaults to \`Loading interface...\`. It's used to describe what element it is. Use \`false\` to remove.
    `,
  },
}

/**
 * Base URL
 */
export const baseURL = () => {
  return <Facebook baseUrl="path/" />
}

baseURL.story = {
  parameters: {
    notes: `## \`baseUrl?: string\`

    Required if you're using \`<base url="/" />\` in the \`<head/>\`. Defaults to an empty string. This prop is common used as: \`<ContentLoader baseUrl={window.location.pathname} />\` which will fill the SVG attribute with the relative path. Related [#93](https://github.com/danilowoz/react-content-loader/issues/93).
    `,
  },
}

/**
 * Children
 */
export const children = () => {
  return (
    <ContentLoader>
      <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
    </ContentLoader>
  )
}

children.story = { parameters: { notes: `## \`children?: ReactNode\`` } }

/**
 * Speed
 */
export const speed = () => {
  return (
    <>
      <Facebook speed={4} />
      <Facebook speed={1} />
    </>
  )
}

speed.story = {
  parameters: {
    notes: `## \`speed?: number\`

    Defaults to \`2\`. Animation speed in seconds.`,
  },
}

/**
 * Interval
 */
export const interval = () => {
  return <Facebook interval={0.8} />
}

interval.story = {
  parameters: {
    notes: `## \`interval?: number\`

    Defaults to \`0.25\`. Interval of time between runs of the animation, as a fraction of the animation speed.`,
  },
}

/**
 * Width
 */
export const width = () => {
  return <Facebook width={200} />
}

width.story = {
  parameters: {
    notes: `## \`width?: number\`

    Defaults to \`400\`. It will be set in the viewbox attr in the \`<svg />\`.`,
  },
}

/**
 * Height
 */
export const height = () => {
  return <Facebook height={50} />
}

height.story = {
  parameters: {
    notes: `## \`height?: number\`

    Defaults to \`130\`. It will be set in the viewbox attr in the \`<svg />\`.`,
  },
}

/**
 * Gradient Ratio
 */
export const gradientRatio = () => {
  return (
    <>
      <Instagram
        gradientRatio={0.2}
        primaryColor={'#333'}
        secondaryColor={'#999'}
      />
      <Instagram
        gradientRatio={4}
        primaryColor={'#333'}
        secondaryColor={'#999'}
      />
    </>
  )
}

gradientRatio.story = {
  parameters: {
    notes: `## \`gradientRatio?: number\`

    Defaults to \`2\`. Width of the animated gradient as a fraction of the viewbox width.`,
  },
}

/**
 * RTL
 */
export const RTL = () => {
  return <Instagram rtl />
}

RTL.story = {
  parameters: {
    notes: `## \`rtl?: boolean\`

    Defaults to \`false\`. Content right-to-left.`,
  },
}

/**
 * Primary color
 */
export const primaryColor = () => {
  return <Facebook primaryColor="#333" />
}

primaryColor.story = {
  parameters: {
    notes: `## \`primaryColor?: string\`

    Defaults to \`#f3f3f3\` which is used as background of animation.`,
  },
}

/**
 * Secondary color
 */
export const secondaryColor = () => {
  return <Facebook secondaryColor="#333" />
}

secondaryColor.story = {
  parameters: {
    notes: `## \`secondaryColor?: string\`

    Defaults to \`#ecebeb\` which is used as foreground of animation.`,
  },
}

/**
 * Primary opacity
 */
export const primaryOpacity = () => {
  return <Facebook primaryOpacity={0.06} />
}

primaryOpacity.story = {
  parameters: {
    notes: `## \`primaryOpacity?: number\`

    Defaults to \`1\`. Background opacity (0 = transparent, 1 = opaque) used to solve a issue in [Safari](#bugfix-in-safari)`,
  },
}

/**
 * Secondary opacity
 */
export const secondaryOpacity = () => {
  return <Facebook secondaryOpacity={0.06} />
}

secondaryOpacity.story = {
  parameters: {
    notes: `## \`secondaryOpacity?: number\`

    Defaults to \`1\`. Animation opacity (0 = transparent, 1 = opaque) used to solve a issue in [Safari](#bugfix-in-safari)`,
  },
}

/**
 * Unique key
 */
export const uniqueKey = () => {
  return <Facebook uniquekey="my-uniqye-key" />
}

uniqueKey.story = {
  parameters: {
    notes: `## \`uniquekey?: string\`
    
    Defaults to random unique id. Use the same value of prop key, that will solve inconsistency on the SSR, see more [here](https://github.com/danilowoz/react-content-loader/issues/78).`,
  },
}

/**
 * View box
 */
export const viewBox = () => {
  return <Facebook viewBox="" />
}

viewBox.story = {
  parameters: {
    notes: `## \`viewBox?: string\`

    Use viewbox props to set viewbox value.
    Additionally, pass viewBox props as empty string to remove viewBox.`,
  },
}

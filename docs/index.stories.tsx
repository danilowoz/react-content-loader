import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import ContentLoader, {
  BulletList,
  Code,
  Facebook,
  Instagram,
  List,
} from '../src/web'

export default {
  title: 'React Content Loader',
}

const SyntaxCode = ({ children }) => {
  return (
    <SyntaxHighlighter language="jsx" style={docco}>
      {children}
    </SyntaxHighlighter>
  )
}

/**
 * Animated
 */
export const animate = () => {
  return (
    <>
      <SyntaxCode>{'<ContentLoader  />'}</SyntaxCode>
      <ContentLoader />

      <SyntaxCode>{'<ContentLoader animate={false} />'}</SyntaxCode>
      <ContentLoader animate={false} />
    </>
  )
}

animate.story = {
  parameters: {
    notes: `##\`animate?: boolean\` 
    
    Defaults to \`true\`. Opt-out of animations with \`false\``,
  },
}

/**
 * Background color
 */
export const backgroundColor = () => {
  return (
    <>
      <SyntaxCode>{'<ContentLoader backgroundColor="#333" />'}</SyntaxCode>
      <ContentLoader backgroundColor="#333" />
    </>
  )
}

backgroundColor.story = {
  parameters: {
    notes: `## \`backgroundColor?: string\`

    Defaults to \`#f5f6f7\` which is used as background of animation.`,
  },
}

/**
 * Foreground color
 */
export const foregroundColor = () => {
  return (
    <>
      <SyntaxCode>{'<ContentLoader foregroundColor="#333" />'}</SyntaxCode>
      <ContentLoader foregroundColor="#333" />
    </>
  )
}

foregroundColor.story = {
  parameters: {
    notes: `## \`foregroundColor?: string\`

    Defaults to \`#eee\` which is used as foreground of animation.`,
  },
}

/**
 * Background opacity
 */
export const backgroundOpacity = () => {
  return (
    <>
      <SyntaxCode>{'<ContentLoader backgroundOpacity="#333" />'}</SyntaxCode>
      <ContentLoader backgroundOpacity={0.06} />
    </>
  )
}

backgroundOpacity.story = {
  parameters: {
    notes: `## \`backgroundOpacity?: number\`

    Defaults to \`1\`. Background opacity (0 = transparent, 1 = opaque) used to solve a issue in [Safari](#bugfix-in-safari)`,
  },
}

/**
 * Foreground opacity
 */
export const foregroundOpacity = () => {
  return (
    <>
      <SyntaxCode>{'<ContentLoader foregroundOpacity={0.06} />'}</SyntaxCode>
      <ContentLoader foregroundOpacity={0.06} />
    </>
  )
}

foregroundOpacity.story = {
  parameters: {
    notes: `## \`foregroundOpacity?: number\`

    Defaults to \`1\`. Animation opacity (0 = transparent, 1 = opaque) used to solve a issue in [Safari](#bugfix-in-safari)`,
  },
}

/**
 * Base URL
 */
export const baseURL = () => {
  return (
    <>
      <SyntaxCode>{'<ContentLoader baseUrl="" />'}</SyntaxCode>
      <ContentLoader baseUrl="" />
    </>
  )
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
    <>
      <p>Custom</p>
      <SyntaxCode>{`<ContentLoader>
  <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
  <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
  <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
</ContentLoader>`}</SyntaxCode>
      <ContentLoader>
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>

      <p>Default</p>
      <SyntaxCode>{`<ContentLoader />`}</SyntaxCode>
      <ContentLoader />
    </>
  )
}

children.story = { parameters: { notes: `## \`children?: ReactNode\`` } }

/**
 * Gradient Ratio
 */
export const gradientRatio = () => {
  return (
    <>
      <SyntaxCode>{`<ContentLoader
  gradientRatio={0.2}
  backgroundColor={'#333'}
  foregroundColor={'#999'}
/>`}</SyntaxCode>
      <ContentLoader
        gradientRatio={0.2}
        backgroundColor={'#333'}
        foregroundColor={'#999'}
      />

      <SyntaxCode>{`<ContentLoader
  gradientRatio={4}
  backgroundColor={'#333'}
  foregroundColor={'#999'}
/>`}</SyntaxCode>
      <ContentLoader
        gradientRatio={4}
        backgroundColor={'#333'}
        foregroundColor={'#999'}
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
 * Gradient Direction
 */
export const gradientDirection = () => {
  return (
    <>
      <SyntaxCode>{`<BulletList gradientDirection="left-right" />`}</SyntaxCode>
      <BulletList gradientDirection="left-right" />

      <SyntaxCode>{`<BulletList gradientDirection="top-bottom" />`}</SyntaxCode>
      <BulletList gradientDirection="top-bottom" />
    </>
  )
}

gradientDirection.story = {
  parameters: {
    notes: `## \`gradientDirection?: 'left-right' | 'top-bottom' \`

    Defaults to \`left-right\`. Direction in which the gradient is animated. Useful to implement top-down animations`,
  },
}

/**
 * Speed
 */
export const speed = () => {
  return (
    <>
      <SyntaxCode>{`<ContentLoader speed={4} />`}</SyntaxCode>
      <ContentLoader speed={4} />
      <SyntaxCode>{`<ContentLoader speed={1} />`}</SyntaxCode>
      <ContentLoader speed={1} />
    </>
  )
}

speed.story = {
  parameters: {
    notes: `## \`speed?: number\`

    Defaults to \`1.2\`. Animation speed in seconds.`,
  },
}

/**
 * Interval
 */
export const interval = () => {
  return (
    <>
      <SyntaxCode>{`<ContentLoader interval={0.8} />`}</SyntaxCode>
      <ContentLoader interval={0.8} />
    </>
  )
}

interval.story = {
  parameters: {
    notes: `## \`interval?: number\`

    Defaults to \`0.25\`. Interval of time between runs of the animation, as a fraction of the animation speed.`,
  },
}

/**
 * RTL
 */
export const RTL = () => {
  return (
    <>
      <SyntaxCode>{`<ContentLoader rtl />`}</SyntaxCode>
      <ContentLoader rtl />
    </>
  )
}

RTL.story = {
  parameters: {
    notes: `## \`rtl?: boolean\`

    Defaults to \`false\`. Content right-to-left.`,
  },
}

/**
 * Unique key
 */
export const uniqueKey = () => {
  return (
    <>
      <SyntaxCode>{`<ContentLoader uniqueKey="my-uniqye-key" />`}</SyntaxCode>
      <ContentLoader uniqueKey="my-uniqye-key" />
    </>
  )
}

uniqueKey.story = {
  parameters: {
    notes: `## \`uniqueKey?: string\`
    
    Defaults to random unique id. Use the same value of prop key, that will solve inconsistency on the SSR, see more [here](https://github.com/danilowoz/react-content-loader/issues/78).`,
  },
}

/**
 * Responsive
 */
export const responsive = () => {
  return (
    <div style={{ width: 200, border: '1px solid #eee' }}>
      <SyntaxCode>{"<ContentLoader style={{ width: '100%' }} />'"}</SyntaxCode>
      <ContentLoader />
    </div>
  )
}

/**
 * Title
 */
export const title = () => {
  return (
    <>
      <SyntaxCode>{`<ContentLoader  title="Loading interface..." />`}</SyntaxCode>
      <ContentLoader title="Loading interface..." />
    </>
  )
}

title.story = {
  parameters: {
    notes: `## \`title?: string | boolean\`

    Defaults to \`Loading interface...\`. It's used to describe what element it is. Use \`false\` to remove.
    `,
  },
}

/**
 * View box
 */
export const viewBox = () => {
  return (
    <>
      <SyntaxCode>{'<ContentLoader />'}</SyntaxCode>
      <ContentLoader />

      <SyntaxCode>{'<ContentLoader viewBox="" />'}</SyntaxCode>
      <ContentLoader viewBox="" />
    </>
  )
}

viewBox.story = {
  parameters: {
    notes: `## \`viewBox?: string\`

    Use viewbox props to set viewbox value.
    Additionally, pass viewBox props as empty string to remove viewBox.`,
  },
}

/**
 * Presets
 */
export const presets = () => {
  return (
    <>
      <SyntaxCode>{'<Facebook />'}</SyntaxCode>
      <Facebook />

      <SyntaxCode>{'<Instagram />'}</SyntaxCode>
      <Instagram />

      <SyntaxCode>{'<Code />'}</SyntaxCode>
      <Code />

      <SyntaxCode>{'<List />'}</SyntaxCode>
      <List />

      <SyntaxCode>{'<BulletList />'}</SyntaxCode>
      <BulletList />
    </>
  )
}

/**
 * Content loader vs SVG
 */
export const contentLoaderVsSVG = () => {
  return (
    <>
      <ContentLoader viewBox="0 0 636 566">
        <rect x="0" y="2" rx="4" ry="4" width="634" height="374" />
        <rect x="12" y="404" rx="3" ry="3" width="259" height="18" />
        <rect x="294" y="404" rx="3" ry="3" width="163" height="18" />
        <rect x="12" y="441" rx="3" ry="3" width="575" height="18" />
        <rect x="12" y="473" rx="3" ry="3" width="350" height="18" />
        <rect x="70" y="523" rx="3" ry="3" width="251" height="18" />
        <circle cx="37" cy="532" r="25" />
      </ContentLoader>

      <svg viewBox="0 0 636 566">
        <rect x="0" y="2" rx="4" ry="4" width="634" height="374" />
        <rect x="12" y="404" rx="3" ry="3" width="259" height="18" />
        <rect x="294" y="404" rx="3" ry="3" width="163" height="18" />
        <rect x="12" y="441" rx="3" ry="3" width="575" height="18" />
        <rect x="12" y="473" rx="3" ry="3" width="350" height="18" />
        <rect x="70" y="523" rx="3" ry="3" width="251" height="18" />
        <circle cx="37" cy="532" r="25" />
      </svg>
    </>
  )
}

/**
 * beforeMask
 */
export const BeforeMask = () => {
  return (
    <>
      <SyntaxCode>
        {`<ContentLoader
  viewBox="0 0 308 88"
  beforeMask={
    <rect width="306" height="86" y="1" x="1" stroke="#dee0e3" strokeWidth="1" fill="#fff" />
  }
>
  <rect x="12" y="13" rx="4" ry="4" width="20" height="20"></rect>
  <rect x="40" y="16" rx="4" ry="4" width="80" height="14"></rect>
  <rect x="12" y="41" rx="4" ry="4" width="270" height="12"></rect>
  <rect x="12" y="61" rx="4" ry="4" width="270" height="12"></rect>
</ContentLoader>`}
      </SyntaxCode>
      <ContentLoader
        viewBox="0 0 300 88"
        beforeMask={
          <rect
            width="298"
            height="86"
            y="1"
            x="1"
            stroke="#dee0e3"
            strokeWidth="1"
            fill="#fff"
          />
        }
      >
        <rect x="12" y="13" rx="4" ry="4" width="20" height="20"></rect>
        <rect x="40" y="16" rx="4" ry="4" width="80" height="14"></rect>
        <rect x="12" y="41" rx="4" ry="4" width="270" height="12"></rect>
        <rect x="12" y="61" rx="4" ry="4" width="270" height="12"></rect>
      </ContentLoader>
    </>
  )
}

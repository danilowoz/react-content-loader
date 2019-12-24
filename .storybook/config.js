import React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react'
import { themes } from '@storybook/theming'

addParameters({ options: { theme: themes.normal } })

addDecorator(storyFn => (
  <div style={{ maxWidth: '400px', margin: 'auto', fontFamily: 'sans-serif' }}>
    {storyFn()}
  </div>
))

configure(require.context('../docs', true, /\.stories\.(mdx|[tj]sx?)$/), module)

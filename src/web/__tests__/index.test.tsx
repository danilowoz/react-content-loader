/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import ContentLoader from '..'

describe('index', () => {
  const div = document.createElement('div')
  div.id = 'root'
  document.body.appendChild(div)

  it('renders', () => {
    ReactDOM.render(<ContentLoader />, document.getElementById('root'))
  })

  it('renders a SVG as root element ', () => {
    ReactDOM.render(<ContentLoader />, document.getElementById('root'))
    const svgElement = document
      .getElementById('root')
      .getElementsByTagName('svg')

    expect(svgElement.length).toBe(1)
  })
})

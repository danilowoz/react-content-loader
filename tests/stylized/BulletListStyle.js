import React from 'react'

import { mount, render } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

chai.use(chaiEnzyme())

import BulletListStyle from '../../src/stylized/BulletListStyle'

describe('<BulletListStyle />:', () => {
  it('has a `svg`', () => {
      const wrapper = render(<BulletListStyle />)
      expect(wrapper.find('svg')).to.have.length(1)
  })

  it('has a `rect` with `clip-path`', () => {
      const wrapper = render(<BulletListStyle />)
      expect(wrapper.find('rect[clip-path]')).to.have.length(1)
  })

  it('has a `linearGradient`', () => {
      const wrapper = render(<BulletListStyle />)
      expect(wrapper.find('linearGradient')).to.have.length(1)
  })

  it('has three `stop`', () => {
      const wrapper = render(<BulletListStyle />)
      expect(wrapper.find('stop')).to.have.length(3)
  })

  it('has `stop` inside the `linearGradient`', () => {
      const wrapper = render(<BulletListStyle />)
      expect(wrapper.find('stop').parent().is('lineargradient')).to.equal(true)
  })

  it('has four `circle`s followed by a `rect`', () => {
    const wrapper = render(<BulletListStyle />)
    expect(wrapper.find('circle + rect')).to.have.length(4)
  })
})

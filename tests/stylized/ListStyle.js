import React from 'react'

import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

chai.use(chaiEnzyme())

import ListStyle from '../../src/stylized/ListStyle'

describe('<ListStyle />', () => {
  it('has a `svg`', () => {
    const wrapper = mount(<ListStyle />)
    expect(wrapper.find('svg')).to.have.length(1)
  })

  it('has a `rect` with `clipPath`', () => {
    const wrapper = mount(<ListStyle />)
    expect(wrapper.find('rect[clipPath]')).to.have.length(1)
  })

  it('has a `linearGradient`', () => {
    const wrapper = mount(<ListStyle />)
    expect(wrapper.find('linearGradient')).to.have.length(1)
  })

  it('has three `stop`', () => {
    const wrapper = mount(<ListStyle />)
    expect(wrapper.find('stop')).to.have.length(3)
  })

  it('has `stop` inside the `linearGradient`', () => {
    const wrapper = mount(<ListStyle />)
    expect(wrapper.find('linearGradient').find('stop')).to.have.length(3)
  })
})

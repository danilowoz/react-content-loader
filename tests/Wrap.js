import 'jsdom-global/register'
import React from 'react'

import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

import ContentLoader from '../src/index'
import Wrap, { generateId } from '../src/Wrap'

describe('<Wrap /> Check id`s to render the SVG', () => {
  const wrapper = mount(<Wrap />)

  it('is mask with the same `idClip`', () => {
    const idClip = wrapper.find('clipPath').prop('id')
    expect(wrapper.find('rect[clipPath]').prop('clipPath')).to.have.equal(`url(#${idClip})`)
  })

  it('is linearGradient with the same `idClip`', () => {
    const idGradient = wrapper.find('linearGradient').prop('id')
    expect(wrapper.find('rect[clipPath]').prop('style').fill).to.have.equal(`url(#${idGradient})`)
  })

  it('has a `svg`', () => {
    expect(wrapper.find('svg')).to.have.length(1)
  })

  it('has a `rect` with `clipPath`', () => {
    expect(wrapper.find('rect[clipPath]')).to.have.length(1)
  })

  it('has a `linearGradient`', () => {
    expect(wrapper.find('linearGradient')).to.have.length(1)
  })

  it('has three `stop`', () => {
    expect(wrapper.find('stop')).to.have.length(3)
  })

  it('has `stop` inside the `linearGradient`', () => {
    expect(wrapper.find('linearGradient').find('stop')).to.have.length(3)
  })
})

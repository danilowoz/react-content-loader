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
  it('is mask with the same `idClip`', () => {
    const wrapper = mount(<Wrap />)
    let idClip = wrapper.find('clipPath').prop('id')

    expect(wrapper.find('rect[clipPath]').prop('clipPath')).to.have.equal(`url(#${idClip})`)
  })

  it('is linearGradient with the same `idClip`', () => {
    const wrapper = mount(<Wrap />)
    let idGradient = wrapper.find('linearGradient').prop('id')

    expect(wrapper.find('rect[clipPath]').prop('style').fill).to.have.equal(`url(#${idGradient})`)
  })
})

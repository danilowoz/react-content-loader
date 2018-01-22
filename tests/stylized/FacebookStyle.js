import 'jsdom-global/register'
import React from 'react'

import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

import FacebookStyle from '../../src/stylized/FacebookStyle'

describe('<FacebookStyle />', () => {
  const wrapper = mount(<FacebookStyle speed={20} />)

  it('has five `rect`', () => {
    expect(wrapper.find('clipPath rect')).to.have.length(5)
  })

  it('has one `circle`', () => {
    expect(wrapper.find('clipPath circle')).to.have.length(1)
  })

  it('prop is propagated', () => {
    expect(wrapper.props().speed).to.equal(20)
  })
})

import 'jsdom-global/register'
import React from 'react'

import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

chai.use(chaiEnzyme())

import InstagramStyle from '../../src/stylized/InstagramStyle'

describe('<InstagramStyle />', () => {
  const wrapper = mount(<InstagramStyle speed={20} />)

  it('has three `rect`', () => {
    expect(wrapper.find('clipPath rect')).to.have.length(3)
  })

  it('has one `circle`', () => {
    expect(wrapper.find('clipPath circle')).to.have.length(1)
  })

  it('prop is propagated', () => {
    expect(wrapper.props().speed).to.equal(20)
  })
})

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

import ListStyle from '../../src/stylized/ListStyle'

describe('<ListStyle />', () => {
  const wrapper = mount(<ListStyle speed={20} />)

  it('has six `rect`', () => {
    expect(wrapper.find('clipPath rect')).to.have.length(6)
  })

  it('prop is propagated', () => {
    expect(wrapper.props().speed).to.equal(20)
  })
})

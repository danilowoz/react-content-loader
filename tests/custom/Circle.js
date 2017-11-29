import React from 'react'

import Enzyme, { mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

import Circle from '../../src/custom/Circle'

describe('<Circle />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Circle />)
  })

  it('has defaults props', () => {
    const props = wrapper.props()

    for (let key in props) expect(props[key]).to.not.equal(undefined)
  })
})

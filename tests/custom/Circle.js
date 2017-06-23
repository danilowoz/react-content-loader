import React from 'react'

import {mount, render} from 'enzyme'
import chai, {expect} from 'chai'

import Circle from '../../src/custom/Circle'

describe('<Circle />', () => {
    let wrapper 

    beforeEach(() => {
        wrapper = mount(<Circle />)
    })

    it('has defaults props', () => {
        const props = wrapper.props()

        for ( let key in props )
            expect(props[key]).to.not.equal(undefined)
    })
})

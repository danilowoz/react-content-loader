import React from 'react'

import {shallow, mount, render} from 'enzyme'
import chai, {expect} from 'chai'

import Rect from '../../src/custom/Rect'

describe('<Rect />', () => {
    let wrapper 

    beforeEach(() => {
        wrapper = shallow(<Rect />)
    })

    it('has defaults props', () => {
        const props = wrapper.props()

        for ( let key in props )
            expect(props[key]).to.not.equal(undefined)
    })
})

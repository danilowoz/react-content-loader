import React from 'react'

import {mount, render} from 'enzyme'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

chai.use(chaiEnzyme())

import ListStyle from '../../src/stylized/ListStyle'

describe('<ListStyle />', () => {
    it('has a `svg`', () => {
        const wrapper = render(<ListStyle />)
        expect(wrapper.find('svg')).to.have.length(1)
    })

    it('has a `rect` with `clip-path`', () => {
        const wrapper = render(<ListStyle />)
        expect(wrapper.find('rect[clip-path]')).to.have.length(1)
    })

    it('has a `linearGradient`', () => {
        const wrapper = render(<ListStyle />)
        expect(wrapper.find('linearGradient')).to.have.length(1)
    })

    it('has three `stop`', () => {
        const wrapper = render(<ListStyle />)
        expect(wrapper.find('stop')).to.have.length(3)
    })

    it('has `stop` inside the `linearGradient`', () => {
        const wrapper = render(<ListStyle />)
        expect(wrapper.find('stop').parent().is('lineargradient')).to.equal(true)
    })
})

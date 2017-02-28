import React from 'react'

import {shallow, mount, render} from 'enzyme'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

chai.use(chaiEnzyme())

import CodeStyle from '../../src/stylized/CodeStyle'

describe('<CodeStyle />:', () => {
    it('has a `svg`', () => {
        const wrapper = render(<CodeStyle />)
        expect(wrapper.find('svg')).to.have.length(1)
    })

    it('has a `rect` with `clip-path`', () => {
        const wrapper = render(<CodeStyle />)
        expect(wrapper.find('rect[clip-path]')).to.have.length(1)
    })

    it('has a `linearGradient`', () => {
        const wrapper = render(<CodeStyle />)
        expect(wrapper.find('linearGradient')).to.have.length(1)
    })

    it('has three `stop`', () => {
        const wrapper = render(<CodeStyle />)
        expect(wrapper.find('stop')).to.have.length(3)
    })

    it('has `stop` inside the `linearGradient`', () => {
        const wrapper = render(<CodeStyle />)
        expect(wrapper.find('stop').parent().is('lineargradient')).to.equal(true)
    })
})

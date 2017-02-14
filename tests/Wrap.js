import React from 'react'

import {shallow, mount, render} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'

import ContentLoader from '../src/index'
import Wrap, { generateId } from '../src/Wrap'

describe('<Wrap /> Check id`s to render the SVG', () => {

    it('is mask with the same `idClip`', () => {
        const wrapper = mount(<Wrap />)
        let idClip = wrapper.render().find('clipPath')[0].attribs.id
        expect(wrapper.render().find('rect[clip-path]')[0].attribs['clip-path']).to.have.equal(`url(#${idClip})`)
    })

    it('is linearGradient with the same `idClip`', () => {
        const wrapper = mount(<Wrap />)
        let idGradient = wrapper.render().find('linearGradient')[0].attribs.id
        expect(wrapper.render().find('rect[clip-path]')[0].attribs['style']).to.have.equal(`fill: url(#${idGradient});`)
    })

})

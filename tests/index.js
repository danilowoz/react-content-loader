import React from 'react'

import {shallow, mount, render} from 'enzyme'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

chai.use(chaiEnzyme())

import ContentLoader from '../src/index'
import FacebookStyle from '../src/stylized/FacebookStyle'
import InstagramStyle from '../src/stylized/InstagramStyle'
import CodeStyle from '../src/stylized/CodeStyle'

import Rect from '../src/custom/Rect'
import Circle from '../src/custom/Circle'

describe('<ContentLoader />:', () => {

    describe('Type props are used', () => {
        describe('when type is facebook', () => {
            let wrapper

            beforeEach(() => {
                wrapper = shallow(<ContentLoader type={'facebook'} />)
            })

            it('should render <FacebookStyle />', () => {
                expect(wrapper).to.have.descendants(FacebookStyle)
            })
        })

        describe('when type is instagram', () => {
            let wrapper

            beforeEach(() => {
                wrapper = shallow(<ContentLoader type={'instagram'} />)
            })

            it('should render <InstagramStyle />', () => {
                expect(wrapper).to.have.descendants(InstagramStyle)
            })
        })

        describe('when type is code', () => {
            let wrapper

            beforeEach(() => {
                wrapper = shallow(<ContentLoader type={'code'} />)
            })

            it('should render <CodeStyle />', () => {
                expect(wrapper).to.have.descendants(CodeStyle)
            })
        })

        describe('when type is undefined', () => {
            let wrapper

            beforeEach(() => {
                wrapper = shallow(<ContentLoader />)
            })

            it('should render <FacebookStyle />', () => {
                expect(wrapper).to.have.descendants(FacebookStyle)
            })
        })

        describe('when type is custom', () => {
            let wrapper

            beforeEach(() => {
                wrapper = shallow(
                    <ContentLoader>
                        <Rect />
                        <Circle />
                    </ContentLoader>
                )
            })

            it('should render custom element', () => {
                expect(wrapper.children()).to.have.length(2)
                expect(wrapper).to.have.descendants(Rect)
                expect(wrapper).to.have.descendants(Circle)
            })

        })
    })


    describe('Props are propagated', () => {
        let wrapper

        beforeEach(() => {
            wrapper = shallow(<ContentLoader 
                speed={10} 
                height={200}
                width={200}
                primaryColor='#000'
                secondaryColor='#fff'
            />)
        })

        it('`speed` is a number and used', ()=> {
            expect(wrapper.props().speed).to.equal(10)
        })

        it('`height` is a number and used', ()=> {
            expect(wrapper.props().height).to.equal(200)
        })

        it('`width` is a number and used', ()=> {
            expect(wrapper.props().width).to.equal(200)
        })

        it('`primaryColor` is a string and used', ()=> {
            expect(wrapper.props().primaryColor).to.string('#000')
        })

        it('`secondaryColor` is a string and used', ()=> {
            expect(wrapper.props().secondaryColor).to.string('#fff')
        })
    })

})

import React from 'react'

import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() })
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
      const wrapper = mount(<ContentLoader type={'facebook'} />)

      it('should render <FacebookStyle />', () => {
        expect(wrapper).to.have.descendants(FacebookStyle)
      })
    })

    describe('when type is instagram', () => {
      const wrapper = mount(<ContentLoader type={'instagram'} />)

      it('should render <InstagramStyle />', () => {
        expect(wrapper).to.have.descendants(InstagramStyle)
      })
    })

    describe('when type is code', () => {
      const wrapper = mount(<ContentLoader type={'code'} />)

      it('should render <CodeStyle />', () => {
        expect(wrapper).to.have.descendants(CodeStyle)
      })
    })

    describe('when type is undefined', () => {
      const wrapper = mount(<ContentLoader />)

      it('should render <FacebookStyle />', () => {
        expect(wrapper).to.have.descendants(FacebookStyle)
      })
    })

    describe('when type is custom', () => {
      const wrapper = mount(
        <ContentLoader>
          <Rect />
          <Circle />
        </ContentLoader>
      )

      it('should render custom element', () => {
        expect(wrapper).to.have.descendants(Rect)
        expect(wrapper).to.have.descendants(Circle)
      })
    })
  })

  describe('Props are propagated', () => {
    const wrapper = mount(
      <ContentLoader
        speed={10}
        height={200}
        width={200}
        primaryColor="#000"
        secondaryColor="#fff"
        preserveAspectRatio="xMaxYMax"
        className="random-className"
        style={{ marginBottom: '10px' }}
      />
    )

    it('`speed` is a number and used', () => {
      expect(wrapper.props().speed).to.equal(10)
    })

    it('`height` is a number and used', () => {
      expect(wrapper.props().height).to.equal(200)
    })

    it('`width` is a number and used', () => {
      expect(wrapper.props().width).to.equal(200)
    })

    it('`primaryColor` is a string and used', () => {
      expect(wrapper.props().primaryColor).to.string('#000')
    })

    it('`secondaryColor` is a string and used', () => {
      expect(wrapper.props().secondaryColor).to.string('#fff')
    })

    it('`preserveAspectRatio` is a string and used', () => {
      expect(wrapper.props().preserveAspectRatio).to.string('xMaxYMax')
    })

    it('`style` is a object and used', () => {
      expect(wrapper.props().style).to.deep.equal({ marginBottom: '10px' })
    })
  })
})

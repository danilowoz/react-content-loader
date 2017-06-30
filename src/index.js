import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Wrap from './Wrap'
// Stylized
import FacebookStyle from './stylized/FacebookStyle'
import InstagramStyle from './stylized/InstagramStyle'
import CodeStyle from './stylized/CodeStyle'
import ListStyle from './stylized/ListStyle'
// Custom
import Rect from './custom/Rect'
import Circle from './custom/Circle'

class ContentLoader extends Component {

    constructor(props) {
        super(props)

        this.state = {
            style: props.style,
            type: props.type,
            speed: props.speed,
            width: props.width,
            height: props.height,
            primaryColor: props.primaryColor,
            secondaryColor: props.secondaryColor
        }
    }

    render() {

        if (this.props.children) {

            return (
                <Wrap {...this.state}>
                    { this.props.children }
                </Wrap>
            )

        }
        
        if (!this.props.children) {

            switch (this.state.type.toLowerCase()) {

            case 'instagram':
                return <InstagramStyle {...this.state} />
                break

            case 'code':
                return <CodeStyle {...this.state} />
                break

            case 'list':
                return <ListStyle {...this.state} />
                break

            default:  
            case 'facebook': 
                return <FacebookStyle {...this.state} />
                break

            }

        }

    }
}

ContentLoader.propTypes = {
    style: PropTypes.object,
    type: PropTypes.string,
    speed: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string
}

ContentLoader.defaultProps = {
    type: 'facebook',
    speed: 2,
    width: 400,
    height: 130,
    primaryColor: '#f0f0f0',
    secondaryColor: '#e0e0e0'
}

export default ContentLoader
export { Rect, Circle }
import React, { Component, cloneWithProps } from 'react'

import Wrap from './Wrap'
// Stylized
import FacebookStyle from './stylized/FacebookStyle'
import InstagramStyle from './stylized/InstagramStyle'
import CodeStyle from './stylized/CodeStyle'
// Custom
import Rect from './custom/Rect'
import Circle from './custom/Circle'

/**
 * [hashCode - This function is to create an id for SVG]
 * BUT, I can't believe this is the best approach
 * If you know a better solution open a PR, please!
 */
const hashCode = () => {
  var text = ""
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for( var i = 0; i < 5; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}


class ContentLoader extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            style: props.style,
            type: props.type || 'facebook',
            speed: props.speed || 2,
            height: props.height ||130,
            primaryColor: props.primaryColor || '#f0f0f0',
            secondaryColor: props.secondaryColor || '#e0e0e0',
            classNameHash: hashCode()
        }
    }

    render() {
        let elementContentLoader = {}

        // custom
        if( this.props.children ) {

          const renderCustom = () => {
            return(
              <Wrap {...this.state}>
                { this.props.children }
              </Wrap>
            )
          }

          elementContentLoader = renderCustom()

        // stylized
        } else {
          switch(this.state.type) {
              case 'code':
                  elementContentLoader = <CodeStyle {...this.state} />
                  break

              case 'instagram':
                  elementContentLoader = <InstagramStyle {...this.state} />
                  break

              case 'facebook': 
              default:
                  elementContentLoader = <FacebookStyle {...this.state} />
          }
        }

        return elementContentLoader
    }
}

ContentLoader.propTypes = {
  style: React.PropTypes.object,
  type: React.PropTypes.string,
  speed: React.PropTypes.number,
  primaryColor: React.PropTypes.string,
  secondaryColor: React.PropTypes.string
}

export default ContentLoader
export { Rect, Circle }







//@flow
import * as React from 'react'

import Wrap from './Wrap'
// Stylized
import FacebookStyle from './stylized/FacebookStyle'
import InstagramStyle from './stylized/InstagramStyle'
import CodeStyle from './stylized/CodeStyle'
import ListStyle from './stylized/ListStyle'
import BulletListStyle from './stylized/BulletListStyle'
// Custom
import Rect from './custom/Rect'
import Circle from './custom/Circle'

export type Props = {
  style: { [key: string]: any },
  type: string,
  speed: number,
  width: number,
  height: number,
  primaryColor: string,
  secondaryColor: string,
  preserveAspectRatio: string,
  className: string,
}

class ContentLoader extends React.Component<Props> {
  static defaultProps = {
    type: 'facebook',
    speed: 2,
    width: 400,
    height: 130,
    primaryColor: '#f0f0f0',
    secondaryColor: '#e0e0e0',
    preserveAspectRatio: 'xMidYMid meet',
    className: '',
  }

  render() {
    if (this.props.children) {
      return <Wrap {...this.props}>{this.props.children}</Wrap>
    }

    if (!this.props.children) {
      switch (this.props.type.toLowerCase()) {
        case 'instagram':
          return <InstagramStyle {...this.props} />

        case 'code':
          return <CodeStyle {...this.props} />

        case 'list':
          return <ListStyle {...this.props} />

        case 'bullet-list':
          return <BulletListStyle {...this.props} />

        default:
        case 'facebook':
          return <FacebookStyle {...this.props} />
      }
    }
  }
}

export default ContentLoader
export { Rect, Circle }

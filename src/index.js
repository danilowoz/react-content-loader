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
  preserveAspectRatio:string,
}

type State = {
  style: { [key: string]: any },
  type: string,
  speed: number,
  width: number,
  height: number,
  primaryColor: string,
  secondaryColor: string,
  preserveAspectRatio: string,
}

class ContentLoader extends React.Component<Props, State> {
  static defaultProps = {
    type: 'facebook',
    speed: 2,
    width: 400,
    height: 130,
    primaryColor: '#f0f0f0',
    secondaryColor: '#e0e0e0',
    preserveAspectRatio: 'xMidYMid meet',
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      style: props.style,
      type: props.type,
      speed: props.speed,
      width: props.width,
      height: props.height,
      primaryColor: props.primaryColor,
      secondaryColor: props.secondaryColor,
      preserveAspectRatio: props.preserveAspectRatio,
    }
  }

  render() {
    if (this.props.children) {
      return <Wrap {...this.state}>{this.props.children}</Wrap>
    }

    if (!this.props.children) {
      switch (this.state.type.toLowerCase()) {
        case 'instagram':
          return <InstagramStyle {...this.state} />

        case 'code':
          return <CodeStyle {...this.state} />

        case 'list':
          return <ListStyle {...this.state} />

        case 'bullet-list':
          return <BulletListStyle {...this.state} />

        default:
        case 'facebook':
          return <FacebookStyle {...this.state} />
      }
    }
  }
}

export default ContentLoader
export { Rect, Circle }
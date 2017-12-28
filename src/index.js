//@flow
import * as React from 'react'

import Wrap from './Wrap'
// Stylized
import FacebookStyle from './stylized/FacebookStyle'
import InstagramStyle from './stylized/InstagramStyle'
import CodeStyle from './stylized/CodeStyle'
import ListStyle from './stylized/ListStyle'
import BulletListStyle from './stylized/BulletListStyle'

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

const ContentLoader = (props: Props) => {
  if (props.children) {
    return <Wrap {...props}>{props.children}</Wrap>
  }

  switch (props.type.toLowerCase()) {
    case 'instagram':
      return <InstagramStyle {...props} />

    case 'code':
      return <CodeStyle {...props} />

    case 'list':
      return <ListStyle {...props} />

    case 'bullet-list':
      return <BulletListStyle {...props} />

    default:
    case 'facebook':
      return <FacebookStyle {...props} />
  }
}

ContentLoader.defaultProps = {
  type: 'facebook',
  speed: 2,
  width: 400,
  height: 130,
  primaryColor: '#f0f0f0',
  secondaryColor: '#e0e0e0',
  preserveAspectRatio: 'xMidYMid meet',
  className: '',
};

export default ContentLoader

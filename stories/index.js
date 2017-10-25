import React from 'react';

import { storiesOf } from '@storybook/react';

import ContentLoader from '../src/index';
import {Rect, Circle} from '../src/index';

let defaultStyle = {
	width: 400,
	marginLeft: 'auto',
	marginRight: 'auto'
}

const Container = (props) => (<div style={defaultStyle}>{props.children}</div>)

const MyLoader = () => {
  return(
    <ContentLoader height={140} speed={1} primaryColor={'#333'} secondaryColor={'#999'}>
      <Circle x={195} y={30} radius={30} />
      <Rect x={50} y={80} height={10} radius={5} width={300} />
      <Rect x={75} y={100} height={10} radius={5} width={250} />
    </ContentLoader>
  ) 
}


storiesOf('ContentLoader', module)
	.add('facebook style', () => <Container><ContentLoader /></Container>)
	.add('instagram style', () => <Container><ContentLoader type='instagram' /></Container>)
	.add('code style', () => <Container><ContentLoader type='code' /></Container>)
	.add('list style', () => <Container><ContentLoader type='list' /></Container>)
	.add('bullet list style', () => <Container><ContentLoader type='bullet-list' /></Container>)
	.add('custom style', () => <Container><MyLoader /></Container>)

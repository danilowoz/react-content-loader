import React from 'react'

import { storiesOf } from '@storybook/react'

import ContentLoader from '../src/index'

let defaultStyle = {
  width: 400,
  marginLeft: 'auto',
  marginRight: 'auto',
}

const Container = props => <div style={defaultStyle}>{props.children}</div>

const MyLoader = () => {
  return (
    <ContentLoader height={140} speed={1} primaryColor={'#333'} secondaryColor={'#999'}/>
  )
}

storiesOf('ContentLoader', module)
  .add('facebook style', () => (
    <Container>
      <ContentLoader />
    </Container>
  ))
  .add('instagram style', () => (
    <Container>
      <ContentLoader type="instagram" />
    </Container>
  ))
  .add('code style', () => (
    <Container>
      <ContentLoader type="code" />
    </Container>
  ))
  .add('list style', () => (
    <Container>
      <ContentLoader type="list" />
    </Container>
  ))
  .add('bullet list style', () => (
    <Container>
      <ContentLoader type="bullet-list" />
    </Container>
  ))
  .add('custom style', () => (
    <Container>
      <MyLoader />
    </Container>
  ))
  .add('className', () => (
    <Container>
      <ContentLoader className="random-className" />
    </Container>
  ))
  .add('width and height', () => (
    <Container>
      <ContentLoader width={400} height={150} />
    </Container>
  ))

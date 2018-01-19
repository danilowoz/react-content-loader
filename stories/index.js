import React from 'react'

import { storiesOf } from '@storybook/react'

import ContentLoader, { Facebook, Instagram, Code, List, BulletList } from '../src/index'

let defaultStyle = {
  width: 400,
  marginLeft: 'auto',
  marginRight: 'auto',
}

const Container = props => <div style={defaultStyle}>{props.children}</div>

const MyLoader = () => {
  return (
    <ContentLoader height={140} speed={1} primaryColor={'#333'} secondaryColor={'#999'}>
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="82" y="44" rx="3" ry="3" width="250" height="10" />
      <circle cx="35" cy="35" r="35" />
    </ContentLoader>
  )
}

storiesOf('ContentLoader', module)
  .add('facebook style', () => (
    <Container>
      <Facebook />
    </Container>
  ))
  .add('instagram style', () => (
    <Container>
      <Instagram />
    </Container>
  ))
  .add('code style', () => (
    <Container>
      <Code />
    </Container>
  ))
  .add('list style', () => (
    <Container>
      <List />
    </Container>
  ))
  .add('bullet list style', () => (
    <Container>
      <BulletList />
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

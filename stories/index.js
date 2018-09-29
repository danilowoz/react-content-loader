import React from "react"

import { storiesOf } from "@storybook/react"

import ContentLoader, {
  Facebook,
  Instagram,
  Code,
  List,
  BulletList
} from "../src/index"

let defaultStyle = {
  width: 400,
  marginLeft: "auto",
  marginRight: "auto",
  fontFamily: "sans-serif",
  fontSize: 14
}

const Container = props => <div style={defaultStyle}>{props.children}</div>

const MyLoader = () => {
  return (
    <ContentLoader
      height={140}
      speed={1}
      primaryColor={"#333"}
      secondaryColor={"#999"}
    >
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="82" y="44" rx="3" ry="3" width="250" height="10" />
      <circle cx="35" cy="35" r="35" />
    </ContentLoader>
  )
}

storiesOf("ContentLoader", module)
  .add("facebook style", () => (
    <Container>
      <Facebook />
    </Container>
  ))
  .add("instagram style", () => (
    <Container>
      <Instagram />
    </Container>
  ))
  .add("code style", () => (
    <Container>
      <Code />
    </Container>
  ))
  .add("list style", () => (
    <Container>
      <List />
    </Container>
  ))
  .add("bullet list style", () => (
    <Container>
      <BulletList />
    </Container>
  ))
  .add("custom style", () => (
    <Container>
      <MyLoader />
    </Container>
  ))
  .add("className", () => (
    <Container>
      <ContentLoader className="random-className" />
    </Container>
  ))
  .add("width and height", () => (
    <Container>
      <ContentLoader width={400} height={150} />
    </Container>
  ))
  .add("unique-key: for SSR", () => (
    <Container>
      <ContentLoader uniquekey="unique-key" />
    </Container>
  ))
  .add("no animation", () => (
    <Container>
      <Facebook animate={false} />
    </Container>
  ))
  .add("safari bug-fix", () => (
    <Container>
      <p>Original:</p>
      <ContentLoader
        primaryColor="rgba(0,0,0,0.06)"
        secondaryColor="rgba(0,0,0,0.12)"
      />

      <p>Fix for Safari:</p>
      <ContentLoader
        primaryColor="rgb(0,0,0)"
        secondaryColor="rgb(0,0,0)"
        primaryOpacity={0.06}
        secondaryOpacity={0.12}
      />
    </Container>
  ))
  .add("rtl content", () => (
    <Container>
      <p>Left-to-right:</p>
      <ContentLoader />
      <p>Right-to-left:</p>
      <ContentLoader rtl />
    </Container>
  ))

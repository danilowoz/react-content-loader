<p align="center">
  <img width="230px" src="https://user-images.githubusercontent.com/4838076/31404417-65822d5e-add2-11e7-90c3-ce8cded1a02e.gif" alt="React Content Loader" title="React Content Loader" />
</p>

React component that uses SVG to create a collection of loaders which simulates the structure of the
content that will be loaded, similar to Facebook cards loaders. **Use the
[online tool](https://github.com/danilowoz/create-react-content-loader) to create your own custom
loader.**

If you are looking for
[React Native](https://github.com/virusvn/react-native-svg-animated-linear-gradient),
[Preact](https://github.com/bonitasoft/preact-content-loader) or
[Vue.js](https://github.com/LucasLeandro1204/vue-content-loading)

## Installation

**Using npm:**

```sh
npm i react-content-loader --save
```

**Using Yarn:**

```sh
yarn add react-content-loader --save
```

## You can use it in two ways:

**Stylized:** [example](#facebook-style)

```jsx
// import the component
import ContentLoader from 'react-content-loader'

const MyLoader = () => {
  return <ContentLoader type="facebook" />
}
```

**Or in custom mode:** [example](#custom-style)

Use the [create-react-content-loader](https://github.com/danilowoz/create-react-content-loader) for
your custom loaders

```jsx
// import the component
import ContentLoader from 'react-content-loader'

const MyLoader = () => {
  return (
    <ContentLoader height={140} speed={1} primaryColor={'#333'} secondaryColor={'#999'}>
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="82" y="44" rx="3" ry="3" width="250" height="10" />
      <circle cx="35" cy="35" r="35" />
    </ContentLoader>
  )
}
```

## Options

| Name                | Type     |     Default     | Description                                                     |
| ------------------- | -------- | :-------------: | --------------------------------------------------------------- |
| style               | _Object_ |     `null`      | Ex: `{ marginTop: '50px' }`                                     |
| type                | _String_ |   `facebook`    | Options: `facebook`, `instagram`, `list`, `bullet-list`, `code` |
| speed               | _Number_ |       `2`       | Animation speed                                                 |
| width               | _Number_ |      `400`      | **viewBox** width of SVG                                        |
| height              | _Number_ |      `130`      | **viewBox** height of SVG                                       |
| primaryColor        | _String_ |    `#f3f3f3`    | Background the SVG                                              |
| secondaryColor      | _String_ |    `#ecebeb`    | Animation color                                                 |
| preserveAspectRatio | _String_ | `xMidYMid meet` | Aspect ratio option of SVG                                      |
| className           | _String_ |       ''        | Classname in the <svg />                                        |

**Custom element options:**

|            | x        | y        | radius   |  width   |  height  |
| ---------- | -------- | -------- | -------- | :------: | :------: |
| **Rect**   | _Number_ | _Number_ | _Number_ | _Number_ | _Number_ |
| **Circle** | _Number_ | _Number_ | _Number_ |    –     |    –     |

Use the [create-react-content-loader](https://github.com/danilowoz/create-react-content-loader) for
your custom loaders

## Examples

#### Facebook Style

![Facebook Style](https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif)

#### Instagram Style

![Instagram Style](https://cloud.githubusercontent.com/assets/4838076/22555637/749f9e26-e94b-11e6-84ff-83cd415c1eb9.gif)

#### Code Style

![Code Style](https://cloud.githubusercontent.com/assets/4838076/22555473/effa54c2-e94a-11e6-9128-9b608bcc69d9.gif)

#### List Style

![List Style](https://user-images.githubusercontent.com/2671660/27986068-7a0040d6-63f9-11e7-8e54-dcb220e42fd7.gif)

#### Bullet list Style

![Bullet list Style](https://user-images.githubusercontent.com/4838076/31998372-59817bac-b96e-11e7-8ef8-07f61670ee18.gif)

#### Custom Style

![Code Style](https://cloud.githubusercontent.com/assets/4838076/22760218/aa619f32-ee3c-11e6-9cd1-c4af9dd1278e.gif)

#### Credits

[Boilerplate for creating React Npm packages with ES2015](https://github.com/juliancwirko/react-npm-boilerplate)

#### License

MIT

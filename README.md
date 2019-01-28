<p align="center">
  <img width="350
  " alt="react-content-loader" src="https://user-images.githubusercontent.com/4838076/34419335-5669c3f8-ebea-11e7-9668-c47b7846970b.png">
</p>
<p align="center">
  <img width="400" alt="Example's react-content-loader" src="https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif" />
</p>

SVG-Powered component to easily create placeholder loadings, like Facebook cards loading.

## Features

- :gear: **Customizable:** Feel free to change the colors, speed, sizes and even **RTL**;
- :ok_hand: **Plug and play:** with many presets to use, see the [examples](#examples);
- :pencil2: **DIY:** use the [create-content-loader](https://danilowoz.github.io/create-content-loader/) to create your own custom loadings easily;
- ⚛️ **Lightweight:** only **1.4kB** gzipped and **0 dependencies**;

## Index

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)
- [Similars](#similares)
- [Development](#development)
- [Known Issues](#known-issues)

## Getting Started

```sh
npm i react-content-loader --save
```

```sh
yarn add react-content-loader
```

CDN from [JSDELIVR](https://www.jsdelivr.com/package/npm/react-content-loader)

## Usage

There are two ways to use it:

**1. Presets, see the [examples](#examples):**

```jsx
import ContentLoader, { Facebook } from 'react-content-loader'

const MyLoader = () => <ContentLoader />
const MyFacebookLoader = () => <Facebook />
```

**2. Custom mode, see the [online tool](https://danilowoz.github.io/create-react-content-loader/)**

```jsx
const MyLoader = () => (
  <ContentLoader>
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)
```

**Any doubt yet?** Take a look at [codesandbox.io](https://codesandbox.io/s/moojk887z9) working.

## Options

| Name                    | Type                  | Default                | Description                                                               |
| ----------------------- | --------------------- | ---------------------- | ------------------------------------------------------------------------- |
| **animate**             | `boolean`             | `true`                 | `false` to render with no animation                                       |
| **ariaLabel**           | `string`              | `Loading interface...` | Describe what element it is                                               |
| **speed**               | `number`              | `2`                    | Animation speed in seconds                                                |
| **className**           | `string`              | `''`                   | Classname in the `<svg/>`                                                 |
| **width**               | `number`              | `400`                  | viewBox width of `<svg/>`                                                 |
| **height**              | `number`              | `130`                  | viewBox height of `<svg/>`                                                |
| **rtl**                 | `boolean`             | `false`                | Content right-to-left                                                     |
| **preserveAspectRatio** | `string`              | `xMidYMid meet`        | Aspect ratio option of `<svg/>`                                           |
| **primaryColor**        | `string`              | `#f3f3f3`              | Background                                                                |
| **secondaryColor**      | `string`              | `#ecebeb`              | Animation color                                                           |
| **primaryOpacity**      | `number`              | `1`                    | Background opacity (0 = transparent, 1 = opaque)                          |
| **secondaryOpacity**    | `number`              | `1`                    | Animation opacity (0 = transparent, 1 = opaque)                           |
| **style**               | `React.CSSProperties` | `null`                 | Ex: `{ width: '100%', height: '70px' }`                                   |
| **uniquekey**           | `string`              | random unique id       | Use the same value of prop key, that will solve inconsistency on the SSR. |

### Examples

#### Facebook Style

```jsx
// import the component
import { Facebook } from 'react-content-loader'

const MyFacebookLoader = () => <Facebook />
```

![Facebook Style](https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif)

#### Instagram Style

```jsx
// import the component
import { Instagram } from 'react-content-loader'

const MyInstagramLoader = () => <Instagram />
```

![Instagram Style](https://cloud.githubusercontent.com/assets/4838076/22555637/749f9e26-e94b-11e6-84ff-83cd415c1eb9.gif)

#### Code Style

```jsx
// import the component
import { Code } from 'react-content-loader'

const MyCodeLoader = () => <Code />
```

![Code Style](https://cloud.githubusercontent.com/assets/4838076/22555473/effa54c2-e94a-11e6-9128-9b608bcc69d9.gif)

#### List Style

```jsx
// import the component
import { List } from 'react-content-loader'

const MyListLoader = () => <List />
```

![List Style](https://user-images.githubusercontent.com/4838076/36352948-b8931430-149e-11e8-9f4b-3f00bc444a6d.gif)

#### Bullet list Style

```jsx
// import the component
import { BulletList } from 'react-content-loader'

const MyBulletListLoader = () => <BulletList />
```

![Bullet list Style](https://user-images.githubusercontent.com/4838076/31998372-59817bac-b96e-11e7-8ef8-07f61670ee18.gif)

#### Custom Style

For the custom mode, use the
[online tool](https://danilowoz.github.io/create-react-content-loader/).

```jsx
const MyLoader = () => (
  <ContentLoader
    height={140}
    speed={1}
    primaryColor={'#333'}
    secondaryColor={'#999'}
  >
    {/* Pure SVG */}
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)
```

![Custom](https://user-images.githubusercontent.com/4838076/36352947-b87019a8-149e-11e8-99ba-c71c2bcf8733.gif)

## Similars

- [React Native](https://github.com/virusvn/react-native-svg-animated-linear-gradient);
- [Preact](https://github.com/bonitasoft/preact-content-loader);
- Vue.js: [vue-content-loading](https://github.com/LucasLeandro1204/vue-content-loading), [vue-content-loader](https://github.com/egoist/vue-content-loader);
- [Angular](https://github.com/Gbuomprisco/ngx-content-loading).

## Development

Fork the repo then clone it

`$ git clone git@github.com:YourUsername/react-content-loader.git && cd react-content-loader`

Install the dependencies

`$ yarn`

Run the docz to see your changes

`$ yarn dev`

## License

[MIT](https://github.com/danilowoz/react-content-loader/blob/master/LICENSE)

## Known Issues

- **Safari / iOS**

  When using `rgba` as a `primaryColor` or `secondaryColor` value, [Safari does not respect the alpha channel](https://github.com/w3c/svgwg/issues/180), meaning that the color will be opaque. To prevent this, instead of using an `rgba` value for `primaryColor`/`secondaryColor`, use the `rgb` equivalent and move the alpha channel value to the `primaryOpacity`/`secondaryOpacity` props.

  ```jsx
  {/* Opaque color in Safari and iOS */}
  <ContentLoader
    primaryColor="rgba(0,0,0,0.06)"
    secondaryColor="rgba(0,0,0,0.12)">

  ```

{/_ Semi-transparent color in Safari and iOS _/}
<ContentLoader 
    primaryColor="rgb(0,0,0)"
    secondaryColor="rgb(0,0,0)"
    primaryOpacity={0.06}
    secondaryOpacity={0.12}>

```

```

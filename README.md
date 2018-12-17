<p align="center">
  <img width="350
  " alt="react-content-loader" src="https://user-images.githubusercontent.com/4838076/34419335-5669c3f8-ebea-11e7-9668-c47b7846970b.png">
</p>
<p align="center">
  <img width="400" alt="Example's react-content-loader" src="https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif" />
</p>

React component that uses SVG to create a collection of loaders which simulates the structure of the
content that will be loaded, similar to Facebook cards loaders.

[![Size](https://img.shields.io/badge/gzip%20size-1.4kb-brightgreen.svg)]()
[![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)]()
[![CircleCI](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser.svg)]()
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)]()
[![](https://data.jsdelivr.com/v1/package/npm/react-content-loader/badge)](https://www.jsdelivr.com/package/npm/react-content-loader)

## Features

* :gear: **Completely customizable:** you can change the colors, speed, sizes and even with RTL content support;
* :pencil2: **Create your own loading:** use the
  [create-content-loader](https://danilowoz.github.io/create-content-loader/) to create
  your own custom loadings easily;
* :ok_hand: **You can use right now:** there are a lot of presets to use it, see the
  [examples](#examples);
* :rocket: **Performance:** written using only the SVG API.

## Usage

### Installation

Yarn: `$ yarn add react-content-loader`

Npm: `$ npm i react-content-loader --save`

CDN: [from JSDELIVR](https://www.jsdelivr.com/package/npm/react-content-loader)

**You can use it in two ways ([See the options)](#options):**

```jsx
// import the component
import ContentLoader, { Facebook } from 'react-content-loader'

const MyLoader = () => <ContentLoader />
const MyFacebookLoader = () => <Facebook />
```

**Or in custom mode, using the
[online tool](https://danilowoz.github.io/create-react-content-loader/)**

```jsx
const MyLoader = () => (
  <ContentLoader>
    {/* Pure SVG */}
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)
```

## Options

| Name                    | Type        | Default                | Description                                                               |
| ----------------------- | ----------- | ---------------------- | ------------------------------------------------------------------------- |
| **animate**             | `{Boolean}` | `true`                 | `false` to render with no animation                                       |
| **ariaLabel**           | `{String}`  | `Loading interface...` | Describe what element it is                                               |
| **speed**               | `{Number}`  | `2`                    | Animation speed in seconds                                                |
| **className**           | `{String}`  | `''`                   | Classname in the `<svg/>`                                                 |
| **width**               | `{Number}`  | `400`                  | viewBox width of `<svg/>`                                                 |
| **height**              | `{Number}`  | `130`                  | viewBox height of `<svg/>`                                                |
| **rtl**                 | `{Boolean}` | `false`                | Right-to-left animation                                                   |
| **preserveAspectRatio** | `{String}`  | `xMidYMid meet`        | Aspect ratio option of `<svg/>`                                           |
| **primaryColor**        | `{String}`  | `#f3f3f3`              | Background                                                                |
| **secondaryColor**      | `{String}`  | `#ecebeb`              | Animation color                                                           |
| **primaryOpacity**      | `{Number}`  | `1`                    | Background opacity (0 = transparent, 1 = opaque)                          |
| **secondaryOpacity**    | `{Number}`  | `1`                    | Animation opacity (0 = transparent, 1 = opaque)                           |
| **style**               | `{Object}`  | `null`                 | Ex: `{ width: '100%', height: '70px' }`                                   |
| **uniquekey**           | `{String}`  | random unique id       | Use the same value of prop key, that will solve inconsistency on the SSR. |

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

**For the custom mode, use the
[online tool](https://danilowoz.github.io/create-react-content-loader/)**

```jsx
const MyLoader = () => (
  <ContentLoader height={140} speed={1} primaryColor={'#333'} secondaryColor={'#999'}>
    {/* Pure SVG */}
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)
```

![Custom](https://user-images.githubusercontent.com/4838076/36352947-b87019a8-149e-11e8-99ba-c71c2bcf8733.gif)

## Similars

* [React Native](https://github.com/virusvn/react-native-svg-animated-linear-gradient);
* [Preact](https://github.com/bonitasoft/preact-content-loader);
* Vue.js: [vue-content-loading](https://github.com/LucasLeandro1204/vue-content-loading), [vue-content-loader](https://github.com/egoist/vue-content-loader);
* [Angular](https://github.com/Gbuomprisco/ngx-content-loading).

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

* **Safari / iOS**
      
  When using `rgba` as a `primaryColor` or `secondaryColor` value, [Safari does not respect the alpha channel](https://github.com/w3c/svgwg/issues/180), meaning that the color will be opaque. To prevent this, instead of using an `rgba` value for `primaryColor`/`secondaryColor`, use the `rgb` equivalent and move the alpha channel value to the `primaryOpacity`/`secondaryOpacity` props.
  
  ```jsx
  {/* Opaque color in Safari and iOS */}
  <ContentLoader 
    primaryColor="rgba(0,0,0,0.06)" 
    secondaryColor="rgba(0,0,0,0.12)">
  

  {/* Semi-transparent color in Safari and iOS */}
  <ContentLoader 
    primaryColor="rgb(0,0,0)"
    secondaryColor="rgb(0,0,0)"
    primaryOpacity={0.06}
    secondaryOpacity={0.12}>
  ```

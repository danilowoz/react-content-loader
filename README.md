<p align="center">
  <img width="350
  " alt="react-content-loader" src="https://user-images.githubusercontent.com/4838076/34419335-5669c3f8-ebea-11e7-9668-c47b7846970b.png">
</p>
<p align="center">
  <img width="400" alt="Example's react-content-loader" src="https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif" />
</p>

React component that uses SVG to create a collection of loaders which simulates the structure of the
content that will be loaded, similar to Facebook cards loaders.

## Features

* **Complety customizable:** you can change the colors, speed and sizes;
* **Create your own loading:** use the
  [create-react-content-loader](https://danilowoz.github.io/create-react-content-loader/) to create
  your customs loadings easily;
* **You can use right now:** there are a lot of presets to use the loader, see the
  [options](#options);
* **Perfomance:** react-content-loader uses pure SVG to work, so it's works without any javascript,
  canvas, etc;

## Usage

### Installation

Yarn: `$ yarn add react-content-loader`

Npm: `$ npm i react-content-loader --save`

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

| Name                | Type     | Default          | Description                                                  |
| ------------------- | -------- | ---------------- | ------------------------------------------------------------ |
| speed               | _Number_ | `2`              | Animation speed                                              |
| width               | _Number_ | `400`            | **viewBox** width of SVG                                     |
| height              | _Number_ | `130`            | **viewBox** height of SVG                                    |
| style               | _Object_ | `null`           | Ex: `{ marginTop: '50px' }`                                  |
| primaryColor        | _String_ | `#f3f3f3`        | Background the SVG                                           |
| secondaryColor      | _String_ | `#ecebeb`        | Animation color                                              |
| preserveAspectRatio | _String_ | `xMidYMid meet`  | Aspect ratio option of SVG                                   |
| className           | _String_ | ''               | Classname in the <svg />                                     |
| uniquekey           | _String_ | random unique id | **Use the same key value, it'll solve some problems to SSR** |

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

![List Style](https://user-images.githubusercontent.com/2671660/27986068-7a0040d6-63f9-11e7-8e54-dcb220e42fd7.gif)

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
  <ContentLoader>
    {/* Pure SVG */}
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)
```

![Code Style](https://cloud.githubusercontent.com/assets/4838076/22760218/aa619f32-ee3c-11e6-9cd1-c4af9dd1278e.gif)

## Similares

* [React Native](https://github.com/virusvn/react-native-svg-animated-linear-gradient);
* [Preact](https://github.com/bonitasoft/preact-content-loader);
* [Vue.js](https://github.com/LucasLeandro1204/vue-content-loading);
* [Angular](https://github.com/Gbuomprisco/ngx-content-loading).

## Development

Fork the repo then clone it

`$ git clone git@github.com:YourUsername/react-content-loader.git && cd react-content-loader`

Install the dependencies

`$ yarn`

Run the storybook to see your changes

`$ yarn storybook`

## License

[MIT](https://github.com/danilowoz/react-content-loader/blob/master/LICENSE)

<p align="center">
  <a href="https://www.react-europe.org/"><img alt="react-europe-badge" src="https://img.shields.io/badge/join%20us%20at-ReactEurope-blue"/></a>
</p>
<p align="center">
  <img width="350" alt="react-content-loader" src="https://user-images.githubusercontent.com/4838076/34419335-5669c3f8-ebea-11e7-9668-c47b7846970b.png"/>
</p>
<p align="center">
  <img width="400" alt="Example's react-content-loader" src="https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif" />
</p>

SVG-Powered component to easily create placeholder loadings (like Facebook's cards loading).

## Features

- :gear: **Customizable:** Feel free to change the colors, speed, sizes and even **RTL**;
- :ok_hand: **Plug and play:** with many presets to use, see the [examples](http://danilowoz.com/create-content-loader/#gallery);
- :pencil2: **DIY:** use the [create-content-loader](https://danilowoz.github.io/create-content-loader/) to create your own custom loaders easily;
- 📱 **React Native support**: same API, as same powerful features;
- ⚛️ **Really lightweight:** less than **2kB** and **0 dependencies** for web version;

## Index

- [Getting Started](#gettingstarted)
- [Usage](#usage)
  - [Native](#native)
- [Options](#options)
- [Examples](#examples)
- [Similar packages](#similarpackages)
- [Development](#development)
- [Known Issues](#knownissues)

## Getting Started

```sh
npm i react-content-loader --save
```

```sh
yarn add react-content-loader
```

### For React Native

```sh
npm i react-content-loader react-native-svg --save
```

```sh
yarn add react-content-loader react-native-svg
```

CDN from [JSDELIVR](https://www.jsdelivr.com/package/npm/react-content-loader)

## Usage

There are two ways to use it:

**1. Presets, see the [examples](https://danilowoz.com/react-content-loader/):**

```jsx
import ContentLoader, { Facebook } from 'react-content-loader'

const MyLoader = () => <ContentLoader />
const MyFacebookLoader = () => <Facebook />
```

**2. Custom mode, see the [online tool](https://danilowoz.github.io/create-react-content-loader/)**

```jsx
const MyLoader = () => (
  <ContentLoader viewBox="0 0 380 70">
    {/* Only SVG shapes */}    
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)
```

**Still not clear?** Take a look at this working example at [codesandbox.io](https://codesandbox.io/s/moojk887z9)  
Or try the components editable demo hands-on and install it from [bit.dev](https://bit.dev/danilowoz/react-content-loader)

## Native

`react-content-loader` can be used with React Native in the same way as web version with the same import:

**1. Presets, see the [examples](#examples):**

```jsx
import ContentLoader, { Facebook } from 'react-content-loader/native'

const MyLoader = () => <ContentLoader />
const MyFacebookLoader = () => <Facebook />
```

**2. Custom mode**

**To create custom loaders there is an important difference:** as React Native doesn't have any native module for SVG components, it's necessary to import the shapes from [react-native-svg](https://github.com/react-native-community/react-native-svg) or use the named export Rect and Circle from `react-content-loader` import:

```jsx
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'

const MyLoader = () => (
  <ContentLoader viewBox="0 0 380 70">
    <Circle cx="30" cy="30" r="30" />
    <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)
```

## Options

#### **`animate?: boolean`**

Defaults to `true`. Opt-out of animations with `false`

#### **`title?: string`** - _Web only_

Defaults to `Loading interface...`. It's used to describe what element it is. Use ''(empty string) to remove.

#### **`baseUrl?: string`** - _Web only_

Required if you're using `<base url="/" />` document `<head/>`. 
Defaults to an empty string. This prop is common used as: `<ContentLoader baseUrl={window.location.pathname} />` which will fill the SVG attribute with the relative path. Related [#93](https://github.com/danilowoz/react-content-loader/issues/93).

#### **`speed?: number`**

Defaults to `1.2`. Animation speed in seconds.

#### **`interval?: number`** - _Web only_

Defaults to `0.25`. Interval of time between runs of the animation, as a fraction of the animation speed.

#### **`viewBox?: string`**

Use viewBox props to set a custom viewBox value, for more information about how to use it, read the article [How to Scale SVG](https://css-tricks.com/scale-svg/).

#### **`gradientRatio?: number`** - _Web only_

Defaults to `1.2`. Width of the animated gradient as a fraction of the viewbox width.

#### **`rtl?: boolean`**

Defaults to `false`. Content right-to-left.

#### **`backgroundColor?: string`**

Defaults to `#f5f6f7` which is used as background of animation.

#### **`foregroundColor?: string`**

Defaults to `#eee` which is used as the foreground of animation.

#### **`backgroundOpacity?: number`** - _Web only_

Defaults to `1`. Background opacity (0 = transparent, 1 = opaque) used to solve a issue in [Safari](#safari--ios)

#### **`foregroundOpacity?: number`** - _Web only_

Defaults to `1`. Animation opacity (0 = transparent, 1 = opaque) used to solve a issue in [Safari](#safari--ios)

#### **`style?: React.CSSProperties`**

Defaults to an empty object.

#### **`uniqueKey?: string`** - _Web only_

Defaults to random unique id. Use the same value of prop key, that will solve inconsistency on the SSR, see more [here](https://github.com/danilowoz/react-content-loader/issues/78).

See all options [live](https://danilowoz.com/react-content-loader/)

## Examples

##### Facebook Style

```jsx
import { Facebook } from 'react-content-loader'

const MyFacebookLoader = () => <Facebook />
```

<img alt="Facebook Style" src="https://user-images.githubusercontent.com/4838076/73212460-328f7500-4146-11ea-99e7-e19cd4e07a51.png" width="500px" />

##### Instagram Style

```jsx
import { Instagram } from 'react-content-loader'

const MyInstagramLoader = () => <Instagram />
```

<img alt="Instagram Style" src="https://user-images.githubusercontent.com/4838076/73212462-328f7500-4146-11ea-98dc-3a6aeafd4a26.png" width="500px" />

##### Code Style

```jsx
import { Code } from 'react-content-loader'

const MyCodeLoader = () => <Code />
```

<img alt="Code Style" src="https://user-images.githubusercontent.com/4838076/73212459-328f7500-4146-11ea-89b0-1b7bbae8047b.png" width="500px" />

##### List Style

```jsx
import { List } from 'react-content-loader'

const MyListLoader = () => <List />
```

<img alt="List Style" src="https://user-images.githubusercontent.com/4838076/73212463-33280b80-4146-11ea-9f93-95c2cbdef17b.png" width="500px" />

##### Bullet list Style

```jsx
import { BulletList } from 'react-content-loader'

const MyBulletListLoader = () => <BulletList />
```

<img alt="Bullet list Style" src="https://user-images.githubusercontent.com/4838076/73212458-328f7500-4146-11ea-826f-576059c4644e.png" width="500px" />

### Custom Style

For the custom mode, use the
[online tool](https://danilowoz.github.io/create-react-content-loader/).

```jsx
const MyLoader = () => (
  <ContentLoader
    height={140}
    speed={1}
    backgroundColor={'#333'}
    foregroundColor={'#999'}
    viewBox="0 0 380 70"
  >
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)
```

---

![Custom](https://user-images.githubusercontent.com/4838076/36352947-b87019a8-149e-11e8-99ba-c71c2bcf8733.gif)

## Similar packages

- React Native: [rn-placeholder](https://github.com/mfrachet/rn-placeholder), [react-native-svg-animated-linear-gradient](https://github.com/virusvn/react-native-svg-animated-linear-gradient);
- [Preact](https://github.com/bonitasoft/preact-content-loader);
- Vue.js: [vue-content-loading](https://github.com/LucasLeandro1204/vue-content-loading), [vue-content-loader](https://github.com/egoist/vue-content-loader);
- Angular: [ngx-content-loading](https://github.com/Gbuomprisco/ngx-content-loading), [ngx-content-loader](https://github.com/NetanelBasal/ngx-content-loader).

## Development

Fork the repo then clone it

```
$ git clone git@github.com:YourUsername/react-content-loader.git && cd react-content-loader
```

`$ npm i`: Install the dependencies;

`$ npm run build`: Build to production;

`$ npm run dev`: Run the docz to see your changes;

`$ npm run test`: Run all tests: type checking, unit tests on web and native;

`$ yarn test:watch`: Watch unit tests;

`$ yarn tsc`: Typescript checking;

`$ yarn tsc:watch`: Typescript checking with watching;

### Commit messages

Commit messages should follow the [commit message convention](https://conventionalcommits.org/) so, changelogs could be generated automatically by that. Commit messages are validated automatically upon commit. If you aren't familiar with the commit message convention, you can use yarn commit (or `npm run commit`) instead of git commit, which provides an interactive CLI for generating proper commit messages.

## License

[MIT](https://github.com/danilowoz/react-content-loader/blob/master/LICENSE)

## Known Issues

##### **Alpha is not working: Safari / iOS**

When using `rgba` as a `backgroundColor` or `foregroundColor` value, [Safari does not respect the alpha channel](https://github.com/w3c/svgwg/issues/180), meaning that the color will be opaque. To prevent this, instead of using an `rgba` value for `backgroundColor`/`foregroundColor`, use the `rgb` equivalent and move the alpha channel value to the `backgroundOpacity`/`foregroundOpacity` props.

```jsx
{/* Opaque color in Safari and iOS */}
<ContentLoader
  backgroundColor="rgba(0,0,0,0.06)"
  foregroundColor="rgba(0,0,0,0.12)">


{/_ Semi-transparent color in Safari and iOS _/}
<ContentLoader
    backgroundColor="rgb(0,0,0)"
    foregroundColor="rgb(0,0,0)"
    backgroundOpacity={0.06}
    foregroundOpacity={0.12}>


```

##### **Black box in Safari / iOS (again)**

Using base tag on a page that contains SVG elements fails to render and it looks like a black box. Just remove the **base-href** tag from the `<head />` and issue solved.

![](https://user-images.githubusercontent.com/11562881/39406054-2f308de6-4bce-11e8-91fb-bbb35e29fc10.png)

See: [#93](https://github.com/danilowoz/react-content-loader/issues/93) / [109](https://github.com/danilowoz/react-content-loader/issues/109)

# React Content Loader

Component in React and SVG with a collection of loaders that simulate the content will be loaded, similar to Facebook cards. 

## You can use it in two ways: 

**First install the dependency:**
```sh
npm i react-content-loader --save-dev
```

**Stylized:** [example](#facebook-style)
```jsx
// import the component
import ContentLoader from 'react-content-loader'

const MyLoader = () => {
  return(
    <ContentLoader type="facebook" />
  ) 
}
```

**Or in custom mode:** [example](#custom-style)
```jsx
// import the component
import ContentLoader, { Rect, Circle } from 'react-content-loader'

const MyLoader = () => {
  return(
    <ContentLoader height={140} speed={1} primaryColor={'#333'} secondaryColor={'#999'}>
      <Circle x={195} y={30} radius={30} />
      <Rect x={50} y={80} height={10} radius={5} width={300} />
      <Rect x={75} y={100} height={10} radius={5} width={250} />
    </ContentLoader>
  ) 
}
```


## Options

**ContentLoader (wrap) options:**

| Name | Type | Default | Description |
|---|---|---|---|
| style | _Object_ | `null` | Ex: `{ marginTop: '50px' }` |
| type | _String_ | `facebook` | Options: `facebook`, `instagram`, `code` |
| speed | _Number_ | `2` | Animation speed |
| width | _Number_ | `400` | Width component |
| height | _Number_ | `130` | Height component |
| primaryColor | _String_ | `#f3f3f3` | Background the SVG | 
| secondaryColor | _String_ | `#ecebeb` | Animation color | 


**Custom element options:**

|  | x | y | radius | width | height |
|---|---|---|---|---|---|
| **Rect** | _Number_ |  _Number_ |  _Number_ |  _Number_ |  _Number_ |
| **Circle** | _Number_ |  _Number_ |  _Number_ | – | – | 


## Examples

#### Facebook Style
![Facebook Style](https://cloud.githubusercontent.com/assets/4838076/22555575/3a90ecee-e94b-11e6-97df-8054e7297bd8.gif)

#### Instagram Style
![Instagram Style](https://cloud.githubusercontent.com/assets/4838076/22555637/749f9e26-e94b-11e6-84ff-83cd415c1eb9.gif)

#### Code Style
![Code Style](https://cloud.githubusercontent.com/assets/4838076/22555473/effa54c2-e94a-11e6-9128-9b608bcc69d9.gif)

#### Custom Style
![Code Style](https://cloud.githubusercontent.com/assets/4838076/22760218/aa619f32-ee3c-11e6-9cd1-c4af9dd1278e.gif)

### Todo
- [x] Code component;
- [x] Custom elements;
- [ ] List component;
- [ ] Test in multiples browser;

#### Credits

[Boilerplate for creating React Npm packages with ES2015](https://github.com/juliancwirko/react-npm-boilerplate)

#### License

MIT

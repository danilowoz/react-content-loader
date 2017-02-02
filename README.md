# React Content Loader

This project is a collection the loader based on styles cards on Facebook.

## Usage: 

First install the dependency:
```sh
npm i react-content-loader --save-dev
```

After import and use:
```js
// import the component
import ContentLoader from 'react-content-loader'

const MyPage = () => (<ContentLoader />);
```

### Options

| Name | Type | Default | Description |
|---|---|---|---|
| style | _Object_ |  |  |
| type | _String_ | `facebook` | Options: `facebook`, `instagram` |
| speed | _Number_ | `2` | Animation speed |
| primaryColor | _String_ | `#f3f3f3` | Background the SVG | 
| secondaryColor | _String_ | `#ecebeb` | Animation color | 

#### Facebook Style
![Facebook Style](https://cloud.githubusercontent.com/assets/4838076/22555575/3a90ecee-e94b-11e6-97df-8054e7297bd8.gif)

#### Instagram Style
![Instagram Style](https://cloud.githubusercontent.com/assets/4838076/22555637/749f9e26-e94b-11e6-84ff-83cd415c1eb9.gif)

#### Code Style
![Code Style](https://cloud.githubusercontent.com/assets/4838076/22555473/effa54c2-e94a-11e6-9128-9b608bcc69d9.gif)

### Todo
- [x] Code component;
- [ ] List component;
- [ ] Test in multiples browser;
- [ ] A more useful new project;

#### Credits

[Boilerplate for creating React Npm packages with ES2015](https://github.com/juliancwirko/react-npm-boilerplate)

#### License

MIT

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
| secundaryColor | _String_ | `ecebeb` | Animation color | 


### Todo
- [ ] Code component;
- [ ] List component;
- [ ] Test in several browser;
- [ ] Better documentation;
- [ ] A more useful new project;

#### Credits

[Boilerplate for creating React Npm packages with ES2015](https://github.com/juliancwirko/react-npm-boilerplate)

#### License

MIT

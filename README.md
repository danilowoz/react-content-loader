# React Content Loader

This project is a collection the loader basead in styles cards on Facebook.

## Usage: 

First install the dependencie
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
| style | Object |  |  |
| type | String | `facebook` | Default style for component |
| speed | Number | `2` | Speed for animaiton |
| primaryColor | String | `#f3f3f3` | Background the SVG | 
| secundaryColor | String | `ecebeb` | Color of animation | 


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

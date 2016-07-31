# womstrap

[![Join the chat at https://gitter.im/womstrap/womstrap](https://badges.gitter.im/womstrap/womstrap.svg)](https://gitter.im/womstrap/womstrap?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A sassy, opinionated CSS Framework. Now Bootstrap ~3.0.0 compatible!

[Docs/Demo](https://www.womstrap.com/)

### Features

* Vertical Rhythm
* Consistent pattern for form fields
* 8kb minified
* Smart defaults for all default elements (Conventional)
* CSS specificity is very low in the class hierarchy (Configurable)
* Solid foundation for a living styleguide using KSS

## Installation

To use the CSS as is, you can install using npm or bower:

```
npm install womstrap
```

```
bower install womstrap
```

If you want to create your own styleguide, fork the repository and modify the `src` and `kss-html` folders.


### Development

After cloning, you'll first need to install dependencies by running `npm run setup`.

After that just run `npm start`.

KSS will generate the docs from the `kss-html` folder. The `dist` folder is created from  the `src` folder.

### Contributors

Contributors are welcome, just follow these few guidelines:

* Avoid checking in compiled files (dist and docs folders) as this will reduce merge conflicts with master
* BEM for naming conventions
* Alphabetical properties
* Only nest for psuedo-elements

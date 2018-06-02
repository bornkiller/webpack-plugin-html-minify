# @coco-platform/webpack-plugin-html-minify

![Build Status](https://img.shields.io/travis/coco-platform/webpack-plugin-html-minify/master.svg?style=flat)
[![Coverage Status](https://coveralls.io/repos/github/coco-platform/webpack-plugin-html-minify/badge.svg?branch=master)](https://coveralls.io/github/coco-platform/webpack-plugin-html-minify?branch=master)
![Package Dependency](https://david-dm.org/coco-platform/webpack-plugin-html-minify.svg?style=flat)
![Package DevDependency](https://david-dm.org/coco-platform/webpack-plugin-html-minify/dev-status.svg?style=flat)

## Usage

```shell
# npm
npm install @coco-platform/webpack-plugin-html-minify --only=dev;
# yarn
yarn add @coco-platform/webpack-plugin-html-minify --dev;
```

## Options

Please see https://github.com/kangax/html-minifier#options-quick-reference for complete options.

## Example

Then config the webpack:

```javascript
const configuration = {
  entry: path.resolve(__dirname, '__fixture__', 'index.js'),
  resolve: {
    extensions: ['.js', '.css'],
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [],
  },
  plugins: [
    Reflect.construct(HtmlWebpackPlugin, [
      {
        template: path.resolve(__dirname, '__fixture__', 'index.html'),
        inject: 'body',
      },
    ]),
    Reflect.construct(HtmlMinifyPlugin, []),
  ],
};
```

## License

MIT

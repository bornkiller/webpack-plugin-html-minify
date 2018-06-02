/**
 * @description - webpack plugin wrapper html-minifier
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

// package
const { minify } = require('html-minifier');
// scope
const defaultOptions = {
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true,
};

class HtmlMinifyPlugin {
  constructor(options = {}) {
    this.options = { ...defaultOptions, ...options };
  }

  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    compiler.hooks.compilation.tap('HtmlMinify', (compilation) => {
      compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync(
        'HtmlMinify',
        (structure, callback) => {
          callback(null, {
            ...structure,
            html: minify(structure.html, this.options),
          });
        }
      );
    });
  }
}

module.exports = HtmlMinifyPlugin;

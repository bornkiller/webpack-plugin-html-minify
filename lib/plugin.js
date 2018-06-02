/**
 * @description - @coco-platform/init-cli generated template
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

// Native
// Scope
const defaultOptions = {
  verbose: false,
};

class HtmlMinifyPlugin {
  constructor(options = {}) {
    this.options = Object.assign({}, defaultOptions, options);
  }

  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    compiler.hooks.compilation.tap('HtmlMinify', (compilation) => {
      compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync(
        'HtmlMinify',
        (structure, callback) => {
          callback(null, structure);
        }
      );
    });
  }
}

module.exports = HtmlMinifyPlugin;

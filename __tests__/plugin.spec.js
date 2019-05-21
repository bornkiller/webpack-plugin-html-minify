/* eslint-disable import/no-extraneous-dependencies, no-console */

// Native
const fs = require('fs');
const path = require('path');

// External
const webpack = require('webpack');
const MemoryFS = require('memory-fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Internal
const HtmlMinifyPlugin = require('../lib');

// Scope
const mfs = Reflect.construct(MemoryFS, []);
const configuration = {
  entry: path.resolve(__dirname, '__fixture__', 'index.js'),
  mode: 'development',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '__fixture__', 'index.html'),
      inject: 'body',
    }),
    new HtmlMinifyPlugin(),
  ],
};

describe('plugin test suits', () => {
  it('should complete standard workflow', (done) => {
    const compiler = webpack(configuration);
    const outputPath = `${configuration.output.path}/index.html`;

    compiler.inputFileSystem = fs;
    compiler.outputFileSystem = mfs;

    compiler.run((err) => {
      try {
        const content = mfs.readFileSync(outputPath, 'utf8');

        expect(err).toBeNull();
        expect(content).toMatchSnapshot();
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

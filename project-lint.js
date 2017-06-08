'use strict';

const fs = require('fs');
const CLIEngine = require('eslint').CLIEngine;

const config = require('./');

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: config
});

const base = fs.readFileSync('./rules/base.js');

const linter = cli.executeOnText(base);

const result = linter.results[0];

if (result.errorCount === 0) {
  console.log('no errored');
}
else {
  throw new Error(result);
}

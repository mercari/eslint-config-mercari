import test from 'ava';
import { CLIEngine } from 'eslint';
import baseConfig from '../rules/base';

const baseJs = `
import fs from 'fs';
import { join } from 'path';

const test1 = 1;
const test2 = '2';
const obj = {
  test1: 1,
  test2: 2,
  test13: 13,
};

if (test1 == null) {
  // alert('nope');
}

if (test2 === '2') {
  // console.log('2');
}

fs.readFileSync(join(__dirname, 'index.js'));

function P() {
  return new Promise((resolve, reject) => {
    try {
      fs.readFileSync('.');
      resolve('ok');
    } catch (e) {
      reject(e);
    }
  });
}

(async () => {
  try {
    await P();
  } catch (e) {
    // console.error(e);
  }
})();

class Fuga {
  constructor() {
    this.name = 'fuga';
  }
}

export default class extends Fuga {
  constructor() {
    super();

    this.name = 'name';
    this.obj = obj;
  }

  get myName() {
    return this.name;
  }
}
`;

function checkFailedRules(config, source) {
  const cli = new CLIEngine({
    useEslintrc: false,
    baseConfig: config,
  });

  const linter = cli.executeOnText(source);

  return linter.results[0];
}

test('should return no errored at base', (t) => {
  const result = checkFailedRules(baseConfig, baseJs);

  t.is(result.errorCount, 0);
});

# eslint-config-mercari

[![Build Status](https://travis-ci.com/kouzoh/eslint-config-mercari.svg?token=py8qypqMTpvvPPkozsbE&branch=master)](https://travis-ci.com/kouzoh/eslint-config-mercari)

## Install
```
$ npm install --save-dev eslint-config-mercari
```

## Usage
Add `"extends": "mercari"` to your .eslintrc.
This includes Airbnb rule.

## Sample
```javascript
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
```

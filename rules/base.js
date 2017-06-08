module.exports = {
  parser: 'babel-eslint',
  rules: {
    'consistent-return': 0,
    'max-len': [2, {
      code: 80,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreRegExpLiterals: true,
      ignoreTrailingComments: true,
      ignoreTemplateLiterals: true
    }],
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'block-spacing': 2,
    camelcase: 2,
    'constructor-super': 2,
    'comma-dangle': [2, 'never'],
    'comma-style': [2, 'last'],
    'comma-spacing': [2, {
      before: false,
      after: true
    }],
    'callback-return': [2, ['callback', 'cb', 'next']],
    'computed-property-spacing': [2, 'never'],
    'dot-notation': 0,
    'dot-location': [2, 'property'],
    'eol-last': 2,
    eqeqeq: [2, 'allow-null'],
    'generator-star-spacing': 2,
    indent: [2, 2, {
      SwitchCase: 1,
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 3
      }
    }],
    'require-jsdoc': 2,
    'key-spacing': [2, {
      beforeColon: false,
      afterColon : true
    }],
    'keyword-spacing': [2, {
      before: true
    }],
    'linebreak-style': [2, 'unix'],
    'lines-around-comment': [2, {
      beforeLineComment: true,
      afterLineComment: false
    }],
    'no-alert': 0,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-console': 2,
    'no-const-assign': 2,
    'no-constant-condition': 2,
    'no-duplicate-case': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-empty': 2,
    'no-empty-pattern': 2,
    'no-invalid-this': 0, // does not correspond to `arrow-bind-syntax`
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, {'max': 2}],
    'no-multi-spaces': [2, {
      exceptions: {
        ImportDeclaration: true,
        VariableDeclarator: true
      }
    }],
    'no-this-before-super': 2,
    'no-trailing-spaces': 2,
    'no-lonely-if': 2,
    'no-unused-vars': 2,
    'no-unneeded-ternary': 2,
    'no-underscore-dangle': [2, {
      allowAfterThis: true
    }],
    'no-script-url': 1,
    'no-var': 2,
    'no-regex-spaces': 0,
    'object-shorthand': 0,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false,
      arraysInObjects: false
    }],
    'operator-assignment': [2, 'always'],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-reflect': 1,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-yield': 2,
    quotes: [2, 'single'],
    'quote-props': 0,
    semi: [2, 'always'],
    strict: 0,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': [2, 'always'],
    'padded-blocks': 0
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
    modules: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  plugins: []
}

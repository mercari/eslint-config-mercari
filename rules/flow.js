module.exports = {
  'plugins': [
    'flowtype'
  ],
  'rules': {
    'flowtype/boolean-style': [
      2,
      'boolean'
    ],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': [
      2,
      'always'
    ],
    'flowtype/generic-spacing': [
      2,
      'never'
    ],
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-weak-types': 1,
    'flowtype/object-type-delimiter': [
      2,
      'semicolon'
    ],
    'flowtype/require-parameter-type': [
      2,
      {
        'excludeArrowFunctions': true
      }
    ],
    'flowtype/semi': [
      2,
      'always'
    ],
    'flowtype/space-after-type-colon': [
      2,
      'always'
    ],
    'flowtype/space-before-generic-bracket': [
      2,
      'never'
    ],
    'flowtype/space-before-type-colon': [
      2,
      'never'
    ],
    'flowtype/union-intersection-spacing': [
      2,
      'always'
    ],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1
  },
  'settings': {
    'flowtype': {
      // 'onlyFilesWithFlowAnnotation': false
    }
  }
}

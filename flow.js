module.exports = {
  extends: [
    './rules/base',
    './rules/flow'
  ].map(require.resolve),
  rules: {}
};

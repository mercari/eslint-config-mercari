module.exports = {
  extends: [
    './rules/base',
  ].map(require.resolve),
  rules: {}
};

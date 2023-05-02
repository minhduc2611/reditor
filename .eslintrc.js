module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    worker: true,
  },
  globals: {
    self: "readonly",
    BigInt: "readonly",
    globalThis: "readonly",
  },
  rules: {
    'import/no-webpack-loader-syntax': 'off',
  },
};

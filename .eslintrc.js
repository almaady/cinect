module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "quotes": [2, "double"],
    "arrow-parens": [2, "as-needed"],
    "camelcase": 0,
    "comma-dangle": [2, "always-multiline"],
    "no-confusing-arrow": [2, { allowParens: true }],
    "object-curly-newline": [2, { multiline: true, consistent: true }],
    "import/no-extraneous-dependencies": [2, {"peerDependencies": true}],
    "indent": ["error", 2]
  },
};

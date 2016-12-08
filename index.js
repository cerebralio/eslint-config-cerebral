module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ],
  rules: {
    "arrow-parens": ["error", "always"], // always want parentheses for arrow functions
    "no-param-reassign": 0,              // allows to reassign parameters (often helpful)
    "no-console": 0,                     // console logging is very helpful for debugging
  }
};

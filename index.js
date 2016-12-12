module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ],
  rules: {
    "arrow-parens": ["error", "always"], // always want parentheses for arrow functions
    "no-param-reassign": 0,              // allows to reassign parameters (often helpful)
    "no-console": 0,                     // many logging tools expect stdout / stderr for logs
    "class-methods-use-this": 0,         // just because you can make it static does not mean that you should
  }
};

module.exports = {
  extends: [
    require.resolve('./index'),
  ],
  rules: {
    "arrow-parens": ["error", "never"],  // for react chained arrows are often used, better without parens
  }
};

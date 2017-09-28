module.exports = {
  "plugins": [
    "react",
  ],
  "env": {
    "es6": true,
    "browser": true,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "spread": true,
    }
  },
  extends: [
    require.resolve('./index'),
  ],
  rules: {
    "arrow-parens": ["error", "as-needed"],  // for react chained arrows are often used, better without parens
    "react/jsx-uses-react": "error" ,        // do not consider it an error to include React when only using JSX
    "react/jsx-uses-vars": "error",          // this is to avoid errors for vars only used in JSX
    "react/jsx-no-bind": "error",            // dont want endless function creation
    "prefer-default-export": false,          // often files will develop from single to multiple export
  }
};

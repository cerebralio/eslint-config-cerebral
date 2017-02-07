module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ],
  rules: {
    "arrow-parens": ["error", "always"], // always want parentheses for arrow functions
    "no-param-reassign": 0,              // allows to reassign parameters (often helpful)
    "no-console": 0,                     // many logging tools expect stdout / stderr for logs
    "class-methods-use-this": 0,         // just because you can make it static does not mean that you should
    "no-plusplus": 0,                    // unnecessary use should be discouraged, not outlawed
    "no-restricted-syntax": 0,           // for-in is a nice syntax when you know what you are doing
    "guard-for-in": 0,                   // the same - use for-in for inline objects and nothing will harm you
    "no-loop-func": 0,                   // when you allow loops, you need to be able to create functions inside
    "no-constant-condition": ["error",   // while(true) is useful in some circumstances
      { "checkLoops": false }],
    "no-continue": 0,                    // continue is useful
    "one-var": ["error", {               // splitting uninitialized on multiple lines is bloat
      "initialized": "never",
      "uninitialized": "always",
    }],
    "one-var-declaration-per-line": 0,   // same as above
    "no-inner-declarations": 0,          // we want inner declartions in es6
    "no-bitwise": 0,                     // bitwise is fine when you need it
    'no-restricted-properties': ['error',// redefine these to avoid deprecation of Math.pow
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }],
    "import/no-dynamic-require": 0,      // when this is used, usually it is for good reason
    "no-path-concat": 0,                 // sorry, Windows support is not a priority
    "comma-dangle": ["error", {          // dont want commas at end of function parameters
      "arrays": "always",
      "objects": "always",
      "imports": "ignore",
      "exports": "ignore",
      "functions": "ignore",
    }]
  }
};

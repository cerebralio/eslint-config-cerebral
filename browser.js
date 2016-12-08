module.exports = {
  "env": {
    "es6": false,
    "node": false,
    "browser": true,
  },
  "parserOptions": {
    "ecmaVersion": 5
  },
  "rules": {
    /* styling */
    "indent": ["error", 2],          // http://eslint.org/docs/rules/indent
    "brace-style": [2,               // http://eslint.org/docs/rules/brace-style
    "1tbs", {
      "allowSingleLine": true
    }],
    "quotes": [                      // http://eslint.org/docs/rules/quotes
      2, "single", "avoid-escape"
    ],
    "padded-blocks": [2, "never"],   // http://eslint.org/docs/rules/padded-blocks
    "comma-style": [2, "last"],      // http://eslint.org/docs/rules/comma-style
    "key-spacing": [2, {             // http://eslint.org/docs/rules/key-spacing
      "beforeColon": false,
      "afterColon": true
    }],
    "new-cap": [2, {                 // http://eslint.org/docs/rules/new-cap
      "newIsCap": true
    }],
    "no-array-constructor": 2,       // http://eslint.org/docs/rules/no-array-constructor
    "no-mixed-spaces-and-tabs": 1,   // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    "func-call-spacing": [           // http://eslint.org/docs/rules/func-call-spacing
      2, "never"
    ],
    "no-trailing-spaces": 2,         // http://eslint.org/docs/rules/no-trailing-spaces
    "keyword-spacing": [2,           // http://eslint.org/docs/rules/keyword-spacing
      { before: true }
    ],
    "space-before-function-paren": [ // http://eslint.org/docs/rules/space-before-function-paren
      2, "never"
    ],
    "space-unary-ops": 2,            // http://eslint.org/docs/rules/space-unary-ops

    /* guidelines */
    "semi": [2, "always"],           // http://eslint.org/docs/rules/semi
    "new-parens": 2,                 // http://eslint.org/docs/rules/new-parens
    "no-path-concat": 2,             // http://eslint.org/docs/rules/no-path-concat
    "no-regex-spaces": 2,            // http://eslint.org/docs/rules/no-regex-spaces
    "consistent-return": 2,          // http://eslint.org/docs/rules/consistent-return
    "default-case": 2,               // http://eslint.org/docs/rules/default-case
    "dot-notation": [2, {            // http://eslint.org/docs/rules/dot-notation
      "allowKeywords": true
    }],
    "no-caller": 2,                  // http://eslint.org/docs/rules/no-caller
    "no-eval": 2,                    // http://eslint.org/docs/rules/no-eval
    "no-implied-eval": 2,            // http://eslint.org/docs/rules/no-implied-eval
    "no-extend-native": 2,           // http://eslint.org/docs/rules/no-extend-native
    "no-floating-decimal": 2,        // http://eslint.org/docs/rules/no-floating-decimal
    "no-global-assign": 2,           // http://eslint.org/docs/rules/no-global-assign
    "no-new": 2,                     // http://eslint.org/docs/rules/no-new
    "no-new-wrappers": 2,            // http://eslint.org/docs/rules/no-new-wrappers
    "no-return-assign": 2,           // http://eslint.org/docs/rules/no-return-assign
    "no-sequences": 2,               // http://eslint.org/docs/rules/no-sequences
    "no-throw-literal": 2,           // http://eslint.org/docs/rules/no-throw-literal
    "radix": 2,                      // http://eslint.org/docs/rules/radix
    "wrap-iife": [2, "inside"],      // http://eslint.org/docs/rules/wrap-iife
    "yoda": [2, "never"],            // http://eslint.org/docs/rules/yoda
    "no-nested-ternary": 2,          // http://eslint.org/docs/rules/no-nested-ternary

    /* possible errors */
    "no-cond-assign": [2, "always"], // http://eslint.org/docs/rules/no-cond-assign
    "no-constant-condition": 1,      // http://eslint.org/docs/rules/no-constant-condition
    "no-dupe-keys": 2,               // http://eslint.org/docs/rules/no-dupe-keys
    "no-duplicate-case": 2,          // http://eslint.org/docs/rules/no-duplicate-case
    "no-empty": 2,                   // http://eslint.org/docs/rules/no-empty
    "no-empty-character-class": 2,   // http://eslint.org/docs/rules/no-empty-character-class
    "no-ex-assign": 2,               // http://eslint.org/docs/rules/no-ex-assign
    "no-extra-semi": 2,              // http://eslint.org/docs/rules/no-extra-semi
    "no-func-assign": 2,             // http://eslint.org/docs/rules/no-func-assign
    "no-invalid-regexp": 2,          // http://eslint.org/docs/rules/no-invalid-regexp
    "no-irregular-whitespace": 2,    // http://eslint.org/docs/rules/no-irregular-whitespace
    "no-negated-in-lhs": 2,          // http://eslint.org/docs/rules/no-negated-in-lhs
    "no-obj-calls": 2,               // http://eslint.org/docs/rules/no-obj-calls
    "no-unreachable": 2,             // http://eslint.org/docs/rules/no-unreachable
    "use-isnan": 2,                  // http://eslint.org/docs/rules/use-isnan
    "eqeqeq": 2,                     // http://eslint.org/docs/rules/eqeqeq
    "no-extra-bind": 2,              // http://eslint.org/docs/rules/no-extra-bind
    "no-fallthrough": 2,             // http://eslint.org/docs/rules/no-fallthrough
    "no-lone-blocks": 2,             // http://eslint.org/docs/rules/no-lone-blocks
    "no-loop-func": 2,               // http://eslint.org/docs/rules/no-loop-func
    "no-redeclare": 2,               // http://eslint.org/docs/rules/no-redeclare
    "no-self-compare": 2,            // http://eslint.org/docs/rules/no-self-compare

    /* deprecations */
    "no-octal": 2,                   // http://eslint.org/docs/rules/no-octal
    "no-octal-escape": 2,            // http://eslint.org/docs/rules/no-octal-escape
  }
};

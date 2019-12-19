module.exports = {
  extends: ["react-app","standard"],
  rules: {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "space-before-function-paren": [ "error", {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always",
    }],
    "global-require": 0,
    "no-console": 1,
    "no-use-before-define": 0,
    "radix": 0,
    "eol-last": ["error", "always"],
    "semi": [2, "always"],
    "quotes": ["error", "single"],
    "comma-dangle": ["error", "always-multiline"],
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-tag-spacing": [2, "always"],
    "react/prop-types": 0,
    "import/prefer-default-export": 0
  }
};

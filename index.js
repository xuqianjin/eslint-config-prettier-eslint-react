module.exports = {
  extends: ["react-app", "standard"],
  rules: {
    "jsx-a11y/alt-text": 0,
    "import/order": [
      "error",
      { groups: [["builtin", "external", "internal"]] }
    ],
    "import/newline-after-import": 2
  }
};

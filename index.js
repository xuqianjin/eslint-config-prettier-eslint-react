module.exports = {
  extends: [
    'eslint:recommended',
    'google',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'require-jsdoc': 'off',
    'linebreak-style': 'off',
    'import/newline-after-import': 2,
    'import/order': ['error', {groups: [['builtin', 'external', 'internal']]}],
    'promise/catch-or-return': 'off',
    'indent': 'off',
    'react/prop-types': 'warn',
  },
  plugins: ['import', 'react-native'],
  env: {
  },
};

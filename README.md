# eslint-config-prettier-eslint-react

基于 eslint-config-google 的 eslint config

## Install

```
npm install --save-dev eslint eslint-config-prettier-eslint-react babel-eslint
```

```json
// .eslintrc
{
  "extends": "prettier-eslint-react",
  "parser": "babel-eslint",
  "rules":{}
}
```

```json
// .prettierrc
{
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": true,
  "endOfLine": "auto",
  "bracketSpacing": true
}
```

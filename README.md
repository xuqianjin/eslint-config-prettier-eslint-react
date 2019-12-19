# eslint-config-prettier-eslint-react

基于 react standard 的 eslint config

## Install

```
npm i --save-dev prettier-eslint
npm i --save-dev eslint-config-prettier-eslint-react
```

在`.eslintrc` 或 `package.json`添加

```json
{
  "eslintConfig": {
    "extends": "prettier-eslint-react"
  },
  "env": {
    "react-native/react-native": true
  }
}
```

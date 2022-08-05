# ESLint for Typescript

```text
ESLint is a tool that helps you detect errors and potential problems in your code.
```

## Install and Configuration

### Remove the pre-set ESLint configuration from the [`package.json`](../package.json) file

```diff
...
-"eslintConfig": {
-   "extends":[
-      "react-app",
-      "react-app/jest"
-   ]
-}
...
```

### Install ESLint

```sh
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### And run initial ESLint file configuration

```sh
npx eslint --init
```

### Here we are going to answer some questions about ESLint configuration

`You can select a answer follow this.`

```sh
? How would you like to use ESLint? …
  To check syntax only
▸ To check syntax and find problems
  To check syntax, find problems, and enforce code style
```

```sh
? What type of modules does your project use? …
▸ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
```

```sh
? Which framework does your project use? …
▸ React
  Vue.js
  None of these
```

```sh
? Does your project use TypeScript? No / ‣ Yes
```

```sh
? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
  Node
```

```sh
? What format do you want your config file to be in? …
  JavaScript
  YAML
▸ JSON
```

```sh
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
? Would you like to install them now with npm? ‣ No / Yes
```

### And for now, copy the packages name from that and install them

```sh
yarn add -D eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
```

#### Right now you will got a [`.eslintrc.json`](../.eslintrc.json) file in your project

## Set up the ESLint script in your package.json file

```diff
{
  ...
  "scripts": {
    ...
+    "lint": "eslint src/**/*.{ts,tsx}",
+    "lint:fix": "yarn lint --fix"
  }
  ...
}
```

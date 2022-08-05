# Prettier for Typescript

```text
Prettier is a tool that helps you format code, clean up your code, and fix your code.
```

## Install and Configuration

### Install Prettier

```sh
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks
touch .prettierrc
```

## Set up the Prettier in the ESLint configuration file([`.eslintrc.json`](../.eslintrc.json))

```diff
{
  ...
  "extends": [
    ...
+    "prettier"
  ],
  ...
-  "plugins": ["react", "@typescript-eslint"],
+  "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
  ...
+  "settings": {
+    "import/resolver": {
+      "typescript": {}
+    }
+  },
  ...
}
```

## Set up the Prettier configuration file([`.prettierrc`](../.prettierrc))

```diff
+{
+  "semi": false,
+  "tabWidth": 2,
+  "printWidth": 100,
+  "singleQuote": true,
+  "trailingComma": "all",
+  "jsxSingleQuote": true,
+  "bracketSpacing": true
+}
```

## Set up the Prettier script in your package.json file

```diff
{
  ...
  "scripts": {
    ...
+    "format": "prettier --write 'src/**/*.{ts,tsx}' --config ./.prettierrc"
  }
  ...
}
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Name

```text
A Frontend Backoffice Project.
```

## 🛣 Active Branch

- [x] `main` (protected) => Production mode.
- [x] `staging` protected) => Staging mode for QA testing.
- [x] `uat` protected) => UAT mode for development user.
- [x] `dev` (default & protected) => Development mode for developer.

## 📋 Usage

⚠ Before develop features please create `.env` file contain these variables.

| ENV VARIABLES            | VALUE                   | type      | REMARK                              |
| ------------------------ | ----------------------- | --------- | ----------------------------------- |
| **SKIP_PREFLIGHT_CHECK** | true                    | `public`  |                                     |
| **GENERATE_SOURCEMAP**   | false                   | `public`  |                                     |
| **REACT_APP_API_URL**    | `http://localhost:8001` | `public`  |                                     |
| **REACT_APP_PRIVATE**    |                         | `private` | Please contact someone in your team |
| **REACT_APP_SECRET**     |                         | `secret`  | Please contact team lead            |

## Learn More

- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [React documentation](https://reactjs.org/).

## 📚 Private Package Dependencies

- [ ] @fixtab/common-types
- [ ] @fixtab/helpers
- [ ] @fixtab/lint-config

## Code Features

- [ ] Typescript support
- [ ] SCSS support
- [ ] Tailwind CSS (with Tailwind preset)
- [ ] Styled Components (with Styled Components preset)
- [ ] Jest (for unit testing)
- [ ] Storybook (for component documentation)
- [ ] Cypress (for E2E testing)
- [ ] ESLint (for linting)
- [ ] Prettier (for formatting)
- [ ] Stylelint (for linting)
- [ ] i18n (for internationalization)
- [ ] Husky (for linting)
- [ ] React Hook Form (for form validation)
- [ ] Yup (for schema form validation)
- [ ] React Router (for routing)
- [ ] Axios (for HTTP requests)
- [ ] Sentry (for error reporting)
- [ ] Recoil (for state management)

## Utilities Support

- [ ] `Error Page` (for error handling)
- [ ] `Loading Page` (for loading handling)
- [ ] `Modal` (for modal handling)

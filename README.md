# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Fixtab Backoffice `SILOM` version

```text
A Frontend Backoffice Project for Fixtab project.
```

## 🛣 Active Branch

- [x] `main` (protected) => for UAT, Staging & Production.
- [x] `dev` (default & protected) => for development mode.

## 📋 Usage

⚠ Before develop features please create `.env` file contain these variables.

| ENV VARIABLES                       | VALUE                   | type      | REMARK                                          |
| ----------------------------------- | ----------------------- | --------- | ----------------------------------------------- |
| **SKIP_PREFLIGHT_CHECK**            | true                    | `public`  |                                                 |
| **GENERATE_SOURCEMAP**              | false                   | `public`  |                                                 |
| **REACT_APP_API_URL**               | `http://localhost:8001` | `public`  | Your BFF URL                                    |
| **REACT_APP_KEYCLOAK_URL**          |                         | `private` | Please contact MBS API Team or related person   |
| **REACT_APP_KEYCLOAK_REALM**        |                         | `private` | Please contact MBS API Team or related person   |
| **REACT_APP_KEYCLOAK_CLIENT_ID**    |                         | `private` | Please contact MBS API Team or related person   |
| **REACT_APP_KEYCLOAK_REDIRECT_URL** |                         | `private` | Please contact MBS API Team or related person   |
| **REACT_APP_SENTRY_DSN**            |                         | `private` | Please contact Technical lead or related person |
| **REACT_APP_SENTRY_RELEASE**        |                         | `private` | Please contact Technical lead or related person |
| **REACT_APP_TRACES_SAMPLE_RATE**    |                         | `private` | Please contact Technical lead or related person |

## Learn More

- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [React documentation](https://reactjs.org/).

## Project Features

- [x] Typescript support
- [ ] Tailwind CSS (with Tailwind preset)
- [ ] Jest (for unit testing)
- [ ] Storybook (for component documentation)
- [ ] Cypress (for E2E testing)
- [x] ESLint (for linting)
- [x] Prettier (for formatting)
- [ ] Stylelint (for linting)
- [ ] i18n (for internationalization)
- [ ] Husky (for linting)

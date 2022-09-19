# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Fixtab Backoffice `SILOM` version

```text
A Frontend Backoffice Project for Fixtab project.
```

## 🛣 Active Branch

- [x] `main` (protected) => Production mode.
- [x] `staging` protected) => Staging mode for QA testing.
- [x] `uat` protected) => UAT mode for development user.
- [x] `dev` (default & protected) => Development mode for developer.

## 📋 Usage

⚠ Before develop features please create `.env` file contain these variables.

| ENV VARIABLES                       | VALUE                   | type      | REMARK                              |
| ----------------------------------- | ----------------------- | --------- | ----------------------------------- |
| **SKIP_PREFLIGHT_CHECK**            | true                    | `public`  |                                     |
| **GENERATE_SOURCEMAP**              | false                   | `public`  |                                     |
| **REACT_APP_API_URL**               | `http://localhost:8001` | `public`  |                                     |
| **REACT_APP_KEYCLOAK_URL**          |                         | `private` | Please contact someone in your team |
| **REACT_APP_KEYCLOAK_REALM**        |                         | `private` | Please contact someone in your team |
| **REACT_APP_KEYCLOAK_CLIENT_ID**    |                         | `private` | Please contact someone in your team |
| **REACT_APP_KEYCLOAK_REDIRECT_URL** |                         | `private` | Please contact someone in your team |
| **REACT_APP_SENTRY_DSN**            |                         | `private` | Please contact team lead            |
| **REACT_APP_SENTRY_RELEASE**        |                         | `private` | Please contact team lead            |
| **REACT_APP_TRACES_SAMPLE_RATE**    |                         | `private` | Please contact team lead            |

## Learn More

- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [React documentation](https://reactjs.org/).

## 📚 Private Package Dependencies

- [ ] @fixtab/common-types
- [ ] @fixtab/helpers
- [ ] @fixtab/lint-config

## Code Features

- [x] Typescript support
- [x] SCSS support
- [x] Tailwind CSS (with Tailwind preset)
- [x] Styled Components (with Styled Components preset)
- [x] Twin.macro (with Styled Component for Tailwind)
- [x] Jest (for unit testing)
- [x] Storybook (for component documentation)
- [ ] Cypress (for E2E testing)
- [x] ESLint (for linting)
- [x] Prettier (for formatting)
- [ ] Stylelint (for linting)
- [x] i18n (for internationalization)
- [x] Husky (for linting)
- [x] React Hook Form (for form validation)
- [ ] Yup (for schema form validation)
- [x] React Router Dom V6 (for routing)
- [x] Axios (for HTTP requests)
- [ ] Sentry (for error reporting)
- [x] Recoil (for state management)

## Utilities Support

- [x] `Error Page` (for error handling)
- [ ] `Loading Page` (for loading handling)
- [ ] `Modal` (for modal handling)
- [ ] Router authentication guard (for authentication handling)

## HOW TO

### How to add a new container

- Create a new folder in `src/containers` with the name of the container.
- Create a new file with the container name.
  - Each container will have at least 2 files.
    - `Container.tsx` (for container layout)
    - `index.ts` (for exporting component)
- This container will used in the feature

### How to add a new component

- Create a new folder in `src/components` with the component name.
- Create a new file with the component name.
  - Each component will have at least 3 files.
    - `Button.stories.tsx` (for storybook)
    - `Button.test.tsx` (for unit testing)
    - `Button.ts` (for component)
    - `index.ts` (for exporting component)

### How to add a new feature

- Create a new folder in `src/features` with the feature name.
- Create a new file with the feature name.
  - For example.
    - `TodoForm.tsx`
    - `TodoDetail.tsx`
    - `index.ts` (for exporting feature)

### How to add a new page

- Add a new route in `src/Routes.tsx` file.
- Add a new member in type `Path`.
- Add a new path in constant `PATH`.
- Add a new route in component `AppRoutes`.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Backoffice `SILOM` version

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

- [ ] @app/common-types
- [ ] @app/helpers
- [ ] @app/lint-config

## Code Features

- [x] [Typescript](https://www.typescriptlang.org/docs/) support
- [x] [SCSS](https://sass-lang.com/documentation/) support
- [x] [Tailwind CSS](https://tailwindcss.com/docs/installation) (with Tailwind preset)
- [x] [Styled Components](https://styled-components.com/docs) (with Styled Components preset)
- [x] [Twin.macro](https://github.com/ben-rogerson/twin.macro) (with Styled Component for Tailwind)
- [x] [Jest](https://jestjs.io/docs/getting-started) (for unit testing)
- [x] [Storybook](https://storybook.js.org/docs/react/get-started/introduction) (for component documentation)
- [ ] Cypress (for E2E testing)
- [x] [ESLint](https://eslint.org/docs/latest/) (for linting)
- [x] [Prettier](https://prettier.io/docs/en/index.html) (for formatting)
- [ ] Stylelint (for linting)
- [x] [i18n](https://www.i18next.com/) (for internationalization)
- [x] [Husky](https://typicode.github.io/husky/#/) (for linting)
- [x] [React Hook Form](https://react-hook-form.com/get-started/) (for form validation)
- [ ] Yup (for schema form validation)
- [x] [React Router Dom V6](https://reactrouter.com/en/main/start/overview) (for routing)
- [x] [Axios](https://github.com/axios/axios) (for HTTP requests)
- [ ] Sentry (for error reporting)
- [x] [Recoil](https://recoiljs.org/docs/introduction/getting-started) (for state management)

## Utilities Support

- [x] `Error Page` (for error handling)
- [ ] `Page Loading` (for loading handling)
- [ ] `Modal` (for modal handling)
- [ ] Router authentication guard (for authentication handling)

## Document

- [Git & Changelog format](./docs/git_and_changelog_format.md)
- [Available scripts](./docs/available_scripts.md)
- [Unit-test](./docs/unit_test.md)
- [Better comment](./docs/better-comments.md)

## HOW TO

### How to add a new container

- Create a new folder in `src/containers` with the name of the container.
- Create a new file with the container name.
  - Each container will have at least 2 files.
    - `Container.test.tsx` (for snapshot testing)
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
    - `Feature.test.tsx` (for snapshot testing)
    - `Feature.tsx`
    - `index.ts` (for exporting feature)

### How to add a new page

- Add a new route in `src/Routes.tsx` file.
- Add a new member in type `Path`.
- Add a new path in constant `PATH`.
- Add a new route in component `AppRoutes`.

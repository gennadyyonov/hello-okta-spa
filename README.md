# Okta-Hosted Login Page Demo SPA

This demo basically shows how to use the [Okta React](https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react) Library to login User to React application. 

The login is achieved through the [Authorization Code Flow with PKCE](https://developer.okta.com/docs/guides/implement-auth-code-pkce/overview/), where the User is redirected to the Okta-Hosted Login Page. 

After the User authenticates he or she is redirected back to the application with an ID token and access token.

This application is a front-end for [Spring Security OAuth2 Demo Applications for Okta](https://github.com/gennadyyonov/hello-okta).

This project was bootstrapped with [Vite](https://vitejs.dev/).

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing.

### Prerequisites

- **[Node.js LTS](https://nodejs.org/en/)** \
  For a detailed overview of Node.js release schedules and support timelines, you can refer to the [Node.js Releases](https://nodejs.org/en/about/previous-releases) page.
- **[npm](https://www.npmjs.com)** \
  [npm](https://www.npmjs.com/package/npm) comes bundled with node

Dependencies are managed by [npm](https://docs.npmjs.com/)  
[Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
```
node -v
v22.13.1

npm -v
11.2.0
```

## Tech Stack

- [**React**:](https://reactjs.org/) A JavaScript library for building user interfaces
- [**TypeScript**:](https://www.typescriptlang.org/) A typed superset of JavaScript that compiles to plain JavaScript.
- [**Vite**:](https://vitejs.dev/) A fast development build tool optimized for modern web projects.
- [**ESLint**:](https://eslint.org/) A linter for identifying and fixing problems in JavaScript/TypeScript code.
- [**Prettier:**](https://prettier.io/) A code formatter to enforce consistent style.
- [**Vitest**](https://vitest.dev/): A Vite-native testing framework.
- [**Node.js**:](https://nodejs.org/) JavaScript runtime environment for running the build process.

## Available Scripts

In the project directory, you can run the following npm scripts:

- `npm start` - starts dev server at `http://localhost:3000` with HMR and all the magic to view it in the browser.
- `npm run build` - builds the app for production to the `dist/` folder.
- `npm run preview` - Previews the built project locally after running npm run build. This serves the production build from the `dist/` folder to verify that it works as expected.
- `npm run test` - Runs the test suite using Vitest.
- `npm run test:watch` - Runs the test suite in watch mode, re-running tests on file changes.
- `npm run test:ci` - Runs tests and generates a code coverage report.
- `npm run format:check` - Checks the code formatting using **Prettier** without making any changes. This is useful for CI pipelines or to verify code formatting.
- `npm run format` - Runs **Prettier** to format the codebase according to the style rules defined in the [.prettierrc](.prettierrc) configuration. This will automatically apply the configured formatting rules.
- `npm run lint` - Runs **ESLint** to analyze style issues.
- `npm run lint:fix` - Runs **ESLint** to fix code style issues.

## Run Application on localhost

* Copy [`.env.development.sample`](.env.development.sample) to `.env.development`
* Fill in your configuration properties instead of `???`
    
    `BASE_URL` variable examples:
    * Localhost `BASE_URL=http://localhost:8060/`
    * K8s `BASE_URL=https://kubernetes.docker.internal/`
* Run `npm start`

## Docker

```
docker-compose -f docker-compose-development.yml build web
docker-compose -f docker-compose-development.yml up web
```
**Note**, application should be built first using the following command:
```
npm install
npm run build
```

### Dependency Update

[How to Update NPM Dependencies](https://www.freecodecamp.org/news/how-to-update-npm-dependencies/)

[npm-check-updates](https://www.npmjs.com/package/npm-check-updates) upgrades `package.json` dependencies to the latest versions.

#### Installation

```bash
npm install -g npm-check-updates
```

#### Usage

Choose which packages to update in **interactive mode**:

```bash
ncu -i
```

To enforce strict versions (i.e., without `^` or `~`), use the `--removeRange` flag:

```bash
ncu -i --removeRange
```

Script to Remove Ranges, Except for Specific Dependencies (`someSpecificDep`):

```bash
sed -i '/"someSpecificDep"/!s/[~^]//g' package.json
npm install
```

## ESLint Configuration

The project uses ESLint for linting. [ESLint Configuration](https://eslint.org/docs/user-guide/configuring) is located in the [eslint.config.js](eslint.config.js) file.

The ESLint setup includes:

- **JavaScript Standard Rules**: Provided by [`@eslint/js`](https://www.npmjs.com/package/@eslint/js) with `js.configs.recommended`.
- **TypeScript Rules**: Provided by [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) with `tseslint.configs.recommended`.
- **React Hooks**: Provided by [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks).
- **React Refresh**: Provided by [`eslint-plugin-react-refresh`](https://www.npmjs.com/package/eslint-plugin-react-refresh).
- **Globals**: The [`globals`](https://www.npmjs.com/package/globals) package is used to add browser globals.

To run the linter, use:

```bash
npm run lint
```
---

## Links

### Technologies & Libraries

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.
- **[Vite](https://vitejs.dev/)**: A fast development build tool optimized for modern web projects.
- **[Node.js](https://nodejs.org/)**: JavaScript runtime environment for running the build process.
- **[React Redux](https://react-redux.js.org/)**
- **[Okta React SDK](https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react)**
- **[React Router](https://reactrouter.com/)**
- **[GraphQL Apollo Client](https://www.apollographql.com/docs/react/)**
- **[Material UI](https://material-ui.com/)**

### Linters and Formatters

- **[ESLint](https://eslint.org/)**: A linter for identifying and fixing problems in JavaScript/TypeScript code.
- **[Prettier](https://prettier.io/)**: A code formatter to enforce consistent style.
- **[Prettier ESLint Plugin](https://www.npmjs.com/package/eslint-config-prettier)**: Disables ESLint rules that conflict with Prettier formatting.

### Testing

- **[Vitest](https://vitest.dev/)**: A Vite-native testing framework.

### ESLint Plugins

- **[JavaScript Standard Rules (eslint-config-js)](https://www.npmjs.com/package/@eslint/js)**: JavaScript rules from ESLint.
- **[TypeScript ESLint Plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)**: TypeScript-specific linting rules for ESLint.
- **[React Hooks Plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks)**: Enforces React Hooks rules.
- **[React Refresh Plugin](https://www.npmjs.com/package/eslint-plugin-react-refresh)**: Enforces rules for React Refresh during hot module replacement.
- **[Globals Package](https://www.npmjs.com/package/globals)**: Provides predefined global variables for different environments (e.g., browser, Node.js).

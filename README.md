![ci](https://github.com/piyush-bhatt/vite-vue-typescript-starter/actions/workflows/ci.yml/badge.svg)

# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.
It's configured with `linting(`[`ESLint`](https://eslint.org)`)`, `formatting(`[`Prettier`](https://prettier.io)`)` and `unit testing(`[`Jest`](https://jestjs.io)`)`. It also has a pre-commit hook set up using [`husky`](https://typicode.github.io/husky/#/) and [`lint-staged`](https://github.com/okonet/lint-staged) to run linting, formatting and testing on the staged files.

## Recommended IDE and Extensions

**IDE**

- [VSCode](https://code.visualstudio.com/)

**Extensions**

- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Project Setup

Clone the repository from [`vite-vue-typescript-starter`](https://github.com/piyush-bhatt/vite-vue-typescript-starter) or use the template to [`create a new repository`](https://github.com/piyush-bhatt/vite-vue-typescript-starter/generate)

```
// Install dependencies
npm install

// Run dev server that compiles and hot-reloads
npm run dev

// Build and minify for production
npm run build

// Preview build
npm run preview

// Run unit tests
npm run test

// Lint project
npm run lint

// Fix file formatting in the project
npm run format
```

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

##

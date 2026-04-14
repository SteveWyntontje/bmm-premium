# bmm-web

This repository will be used for a new website for https://bmm.bcc.media using [Nuxt 4](https://nuxt.com/docs/getting-started/introduction).
In a later stage we want to use the same code to create a desktop app.

This repository uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Develop

```sh
pnpm i
```

### Website

```sh
pnpm dev
```

_Note:_ If you had an error in your code and the system still shows you the error but you've already fixed it, consider running `pnpm clean`. If you have this problem often, consider contacting one of the maintainers of the project.

## Build

To build, first install all packages

```sh
pnpm i
```

You may have to install `pnpm` first:

```sh
npm -g i pnpm
```

### Website

```sh
pnpm build
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + Plugins and configuration provided by `.vscode/extensions.json` and `.vscode/settings.json`

## Type Support For `.vue` Imports in TS

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `JavaScript and TypeScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

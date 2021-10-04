# Commands

> This covers the list of different commands, or scripts, as npm refers to them.

## Start

This script will run clean the `dist/` directory and build a new one to watch changes.

```
npm run start
```

It runs `npm-run-all clean --parallel dev format`.

## Dev

This script will build the `eleventy` files and build a dev server, which you can visit at `localhost:8080`.

```
npm run dev
```

It runs `eleventy --serve`.

## Web

This script is for building the website to run on netlify.

```
npm run dev
```

It runs `eleventy`.

## Clean

This script cleans the output directory `dist/`.

```
npm run clean
```

It runs `rimraf dist`.

## Pa11y

This script runs the `pa11y` package to check the templates for any accessibility issues. We adhere to the [`WCGA`](https://www.w3.org/WAI/standards-guidelines/wcag/) standard and strive AA compliance.

```
npm run pa11y
```

It runs `pa11y ./dist/`.

## Spellcheck

This script runs a the `CSpell` spellcheck package on the `src` directory.

```
npm run spellcheck
```

It runs `npx cspell \"src/templates/\*\*\"`.

## Lint

This script runs both `pa11y` and `spellcheck` scripts. This is ran on successful commits with `lint-staged`.

```
npm run lint
```

It runs `npm-run-all pa11y spellcheck`.

## Format

This script uses the `prettier` package to format the `dist/` directory to ensure all code adheres to coding style guide.

```
npm run format
```

It runs `npx prettier --write dist`.

## [Commit](commit.md)

This script uses the `husky` hook `prepare-commit-msg` to from commitizen.

```
npm run commit
```

It runs `git cz`.

## Build

This script builds the templates into the `dist/` directory with the variables we use for `Sailthru`.

```
npm run build
```

It runs `cross-env ELEVENTY_ENV=prod eleventy`.

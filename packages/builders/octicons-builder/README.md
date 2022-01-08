# READ THIS FIRST

This project is still in experimental development. Expect bugs and breaking changes!

## Overview

Effortless Icon Pack for Heroicons

- Based on [Octicons](https://primer.style/octicons/)
- Defines the Icon Source to be used in any [steeze-ui icon component](https://github.com/steeze-ui/icons/tree/main/packages/components)

## Installation

```bash
npm i -D @steeze-ui/octicons
```

## Usage

```js
import { Alert } from '@steeze-ui/octicons'
```

## Documentation

### Themes

| Value   | Description                   |
| ------- | ----------------------------- |
| default | The 16px version of the Icons |
| 24      | The 24px version of the Icons |

### Other Icon Packs

For all other available Icon Packs visit [steeze-ui/icons](https://github.com/steeze-ui/icons)

## Development

This repo uses pnpm. To build a new version of the package just run:

```bash
pnpm install && pnpm package
```

This produces a ready-to-publish package for the npm registry

# READ THIS FIRST

This project is still in experimental development. Expect bugs and breaking changes!

## Overview

Effortless Icon Pack for Iconic Free Icons

- Based on [iconic free Icons](https://iconic.app/)
- Defines the Icon Source to be used in any [steeze-ui icon component](https://github.com/steeze-ui/icons/tree/main/packages/components)

## Installation

```bash
npm i -D @steeze-ui/iconic-free
```

## Usage

```js
import { Activity } from '@steeze-ui/iconic-free'
```

## Documentation

### Themes

| Value   | Description                              |
| ------- | ---------------------------------------- |
| default | The default (and up to now only) version |

### Other Icon Packs

For all other available Icon Packs visit [steeze-ui/icons](https://github.com/steeze-ui/icons)

## Development

This repo uses pnpm. To build a new version of the package just run:

```bash
pnpm install && pnpm package
```

This produces a ready-to-publish package for the npm registry

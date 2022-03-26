# READ THIS FIRST

This project is still in experimental development. Expect bugs and breaking changes!

## Overview

Effortless Icon Pack for Simple Icons

- Based on [Simple Icons](https://simpleicons.org/)
- Defines the Icon Source to be used in any [steeze-ui icon component](https://github.com/steeze-ui/icons/tree/main/packages/components)

## Installation

```bash
npm i -D @steeze-ui/simple-icons
```

## Usage

```js
import { Github } from '@steeze-ui/simple-icons'
```

## Documentation

### Themes

| Value   | Description                      |
| ------- | -------------------------------- |
| default | The default version of the Icons |

### Other Icon Packs

For all other available Icon Packs visit [steeze-ui/icons](https://github.com/steeze-ui/icons)

## Development

This repo uses pnpm. To build a new version of the package just run:

```bash
pnpm install && pnpm package
```

This produces a ready-to-publish package for the npm registry

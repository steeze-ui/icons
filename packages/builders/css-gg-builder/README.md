# READ THIS FIRST

This project is still in experimental development. Expect bugs and breaking changes!

## Overview

Effortless Icon Pack for CSS.gg Icons

- Based on [CSS.gg Icons](https://css.gg/)
- Defines the Icon Source to be used in any [steeze-ui icon component](https://github.com/steeze-ui/icons/tree/main/packages/components)

## Installation

```bash
npm i -D @steeze-ui/css-gg
```

## Usage

```js
import { Add } from '@steeze-ui/css-gg'
```

## Documentation

### Themes

| Value   | Description                      |
| ------- | -------------------------------- |
| default | The outline version of the Icons |
| solid   | The solid version of the Icons   |

### Other Icon Packs

For all other available Icon Packs visit [steeze-ui/icons](https://github.com/steeze-ui/icons)

## Development

This repo uses pnpm. To build a new version of the package just run:

```bash
pnpm install && pnpm package
```

This produces a ready-to-publish package for the npm registry

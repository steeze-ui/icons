# READ THIS FIRST

This project is still in experimental development. Expect bugs and breaking changes!

## Overview

Effortless Icon Pack for template Icons

- Based on [Phosphor Icons](https://phosphoricons.com/)
- Defines the Icon Source to be used in any [steeze-ui icon component](https://github.com/steeze-ui/icons/tree/main/packages/components)

## Installation

```bash
npm i -D @steeze-ui/phosphor-icons
```

## Usage

```js
import { Lightbulb } from '@steeze-ui/phosphor-icons'
```

## Documentation

### Themes

| Value   | Description                      |
| ------- | -------------------------------- |
| default | The Regular version of the Icons |
| thin    | The Thin version of the Icons    |
| light   | The Light version of the Icons   |
| bold    | The Bold version of the Icons    |
| fill    | The Fill version of the Icons    |
| duotone | The Duotone version of the Icons |

### Other Icon Packs

For all other available Icon Packs visit [steeze-ui/icons](https://github.com/steeze-ui/icons)

## Development

This repo uses pnpm. To build a new version of the package just run:

```bash
pnpm install && pnpm package
```

This produces a ready-to-publish package for the npm registry

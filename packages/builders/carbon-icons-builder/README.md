# READ THIS FIRST

This project is still in experimental development. Expect bugs and breaking changes!

## Overview

Effortless Icon Pack for template Icons

- Based on [Carbon Icons](https://carbondesignsystem.com/guidelines/icons/library/)
- Defines the Icon Source to be used in any [steeze-ui icon component](https://github.com/steeze-ui/icons/tree/main/packages/components)

## Installation

```bash
npm i -D @steeze-ui/carbon-icons
```

## Usage

### Svelte Example

```svelte
import { Category } from '@steeze-ui/carbon-icons'
import { Icon } from '@steeze-ui/svelte-icon'

<Icon src={Category} size="24px" />
```

## Documentation

### Themes

| Value   | Description                                   |
| ------- | --------------------------------------------- |
| default | The 32px version of the Icons                 |
| 16      | The 16px version of the Icons                 |
| 20      | The 20px version of the Icons                 |
| 24      | The 24px version of the Icons                 |
| various | Icons with a different viewbox than the above |

### Other Icon Packs

For all other available Icon Packs visit [steeze-ui/icons](https://github.com/steeze-ui/icons)

## Development

This repo uses pnpm. To build a new version of the package just run:

```bash
pnpm install && pnpm package
```

This produces a ready-to-publish package for the npm registry

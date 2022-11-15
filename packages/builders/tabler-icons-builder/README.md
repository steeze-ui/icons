## Overview

Effortless Icon Pack for tabler-icons

- Based on [@tabler/icons](https://tabler-icons.io/)
- Defines the Icon Source to be used in any [steeze-ui icon component](https://github.com/steeze-ui/icons/tree/main/packages/components)

## Installation

```bash
npm i -D @steeze-ui/tabler-icons
```

## Usage

### Svelte Example

```svelte
import { Anchor } from '@steeze-ui/tabler-icons'
import { Icon } from '@steeze-ui/svelte-icon'

<Icon src={Anchor} size="24px" />
```

## Documentation

### Themes

| Value   | Description                    | Prefered Size |
| ------- | ------------------------------ | ------------- |
| default | A outline version of the Icons | 24px          |

### Other Icon Packs

For all other available Icon Packs visit [steeze-ui/icons](https://github.com/steeze-ui/icons)

## Development

This repo uses pnpm. To build a new version of the package just run:

```bash
pnpm install && pnpm package
```

This produces a ready-to-publish package for the npm registry

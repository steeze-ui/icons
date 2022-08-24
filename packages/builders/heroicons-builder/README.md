## Overview

Effortless Icon Pack for Heroicons 2.0

- Based on [Heroicons](https://heroicons.dev/)
- Defines the Icon Source to be used in any [steeze-ui icon component](https://github.com/steeze-ui/icons/tree/main/packages/components)

## Installation

```bash
npm i -D @steeze-ui/heroicons
```

## Usage

```js
import { LightningBolt } from '@steeze-ui/heroicons'
```

## Documentation

### Themes

| Value   | Description                         | Prefered Size |
| ------- | ----------------------------------- | ------------- |
| default | A outline version of the Icons      | 24px          |
| solid   | A solid version of the Icons        | 24px          |
| mini    | A mini (solid) version of the Icons | 20px          |

### Other Icon Packs

For all other available Icon Packs visit [steeze-ui/icons](https://github.com/steeze-ui/icons)

## Development

This repo uses pnpm. To build a new version of the package just run:

```bash
pnpm install && pnpm package
```

This produces a ready-to-publish package for the npm registry

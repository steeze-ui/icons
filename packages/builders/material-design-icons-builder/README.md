## Overview

Effortless Icon Pack for Material Design Icons 2.0

- Based on [Material Design Icons](https://fonts.google.com/icons)
- Defines the Icon Source to be used in any [steeze-ui icon component](https://github.com/steeze-ui/icons/tree/main/packages/components)

## Installation

```bash
npm i -D @steeze-ui/material-design-icons
```

## Usage

```js
import { Camera } from '@steeze-ui/material-design-icons'
```

## Documentation

### Themes

| Value    | Description                     | Prefered Size |
| -------- | ------------------------------- | ------------- |
| default  | A filled version of the Icons   | 24px          |
| outlined | A outline version of the Icons  | 24px          |
| round    | A round version of the Icons    | 24px          |
| sharp    | A sharp version of the Icons    | 24px          |
| twotone  | A two tone version of the Icons | 24px          |

### Other Icon Packs

For all other available Icon Packs visit [steeze-ui/icons](https://github.com/steeze-ui/icons)

## Development

This repo uses pnpm. To build a new version of the package just run:

```bash
pnpm install && pnpm package
```

This produces a ready-to-publish package for the npm registry

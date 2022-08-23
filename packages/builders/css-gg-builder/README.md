## Overview

Effortless Icon Pack for CSS.gg Icons

- Based on [CSS.gg Icons](https://css.gg/)
- Defines the Icon Source to be used in any [steeze-ui icon component](https://github.com/steeze-ui/icons/tree/main/packages/components)

## Installation

```bash
npm i -D @steeze-ui/css-gg
```

## Usage

```svelte
<!-- svelte example -->
<script>
  import { Add } from '@steeze-ui/css-gg'
  import { Icon } from '@steeze-ui/svelte-icon'
</script>

<Icon src={Add} size="24px" />
```

## Documentation

### Themes

| Value   | Description                      | Prefered Size |
| ------- | -------------------------------- | ------------- |
| default | The outline version of the Icons | 24px          |

### Other Icon Packs

For all other available Icon Packs visit [steeze-ui/icons](https://github.com/steeze-ui/icons)

## Development

This repo uses pnpm. To build a new version of the package just run:

```bash
pnpm install && pnpm package
```

This produces a ready-to-publish package for the npm registry

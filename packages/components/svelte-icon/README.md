# READ THIS FIRST

This project is still in experimental development. Expect bugs and breaking changes!

## Overview

Effortless Svelte Icon Component

- Made for SvelteKit & Vite environments
- Usable with all official [Icon Packs](https://github.com/steeze-ui/icons/)
- Dynamically change theme on runtime

## Installation

```bash
npm i @steeze-ui/svelte-icon
```

## Usage

```svelte
<script>
  //import icon component
  import {Icon} from '@steeze-ui/svelte-icon'

  //import as many icons from a Icon Pack
  import {LightningBolt} from '@steeze-ui/heroicons'
</script>

<!-- Set Icon Theme via the attribute -->
<Icon src={LightningBolt} theme='solid' class='color-gray-900'>
```

## Documentation

### Icon attributes

| Attribute | Default | Description                                                            |
| --------- | ------- | ---------------------------------------------------------------------- |
| src       | -       | (required) The source of a icon coming from an Icon Pack               |
| theme     | default | Configures to use a Icon Theme if available (otherwise render nothing) |
| size      | 100%    | Configures width and height                                            |
| \*        | -       | Any html attribute that is valid (e.g aria-hidden, class or style)     |

### Icon Packs

For all available Icon Packs visit [steeze-ui/icons](https://github.com/steeze-ui/icons)

## Development

This repo uses pnpm. To build a new version of the package just run:

```bash
pnpm install && pnpm package
```

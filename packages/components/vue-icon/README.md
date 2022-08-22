## Overview

Effortless Vue 3 Icon Component 

- Made for Vite environments
- Usable with all official [Icon Packs](https://github.com/steeze-ui/icons/)

## Installation

```bash
npm i -D @steeze-ui/vue-icon
```

## Usage

```vue
<script setup lang="ts">
  //import icon component
  import {Icon} from "@steeze-ui/vue-icon"

  //import as many icons from a Icon Pack
  import {Fire} from "@steeze-ui/heroicons"
</script>

<template>
  <!-- Set Icon Theme via the attribute -->
  <Icon :src=Fire theme="solid" size="24px" color="red"></Icon>
</template>
```

## Documentation

### Icon attributes

| Attribute | Default | Description                                                            |
| --------- | ------- | ---------------------------------------------------------------------- |
| src       | -       | (required) The source of a icon coming from an Icon Pack               |
| theme     | default | Configure to use a Icon Theme if available (otherwise render default) |
| size      | 100%    | Configures width and height                                            |
| \*        | -       | Any html attribute that is valid (e.g aria-hidden, class or style)     |

### Icon Packs

For all available Icon Packs visit [steeze-ui/icons](https://github.com/steeze-ui/icons)

## Development

This repo uses pnpm. To build a new version of the package just run:

```bash
pnpm install && pnpm package
```

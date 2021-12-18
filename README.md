# READ THIS FIRST

This project is still in experimental development. Expect bugs and breaking changes!

## Overview

Effortless Icons

- Icon components (for now it's svelte first)
- Popular Icon Packs
- Icon Pack Themes (different versions of the same icon)
- Templates to Create your own Icon Packs (coming)

```svelte
<script>
  import {Icon} from '@steeze-ui/svelte-icon'
  import {LightningBolt} from '@steeze-ui/heroicons'
</script>

<Icon src={LightningBolt} theme='solid' class='color-gray-900'>
```

## Packages

### Icon Components

| Package                                                   | Version                                                                                                                                             |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@steeze-ui/svelte-icon](packages/components/svelte-icon) | <a href="https://www.npmjs.com/package/@steeze-ui/svelte-icon"><img src="https://img.shields.io/npm/v/@steeze-ui/svelte-icon.svg?style=flat" /></a> |
| @steeze-ui/lit-icon                                       | soon                                                                                                                                                |
| @steeze-ui/react-icon                                     | soon                                                                                                                                                |
| @steeze-ui/vue-icon                                       | soon                                                                                                                                                |

### Icon Packs

| Package                                                         | Themes                  | Source                                                              | Version                                                                                                                                             |
| --------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@steeze-ui/heroicons](packages/builders/heroicons-builder)     | default(outline), solid | [tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons) | <a href="https://www.npmjs.com/package/@steeze-ui/heroicons"><img src="https://img.shields.io/npm/v/@steeze-ui/heroicons.svg?style=flat" /></a>     |
| [@steeze-ui/iconic-free](packages/builders/iconic-free-builder) | default                 | [iconic.app](https://iconic.app/)                                   | <a href="https://www.npmjs.com/package/@steeze-ui/iconic-free"><img src="https://img.shields.io/npm/v/@steeze-ui/iconic-free.svg?style=flat" /></a> |
| [@steeze-ui/radix-icons](packages/builders/radix-icons-builder) | default                 | [radix-ui/icons](https://github.com/radix-ui/icons)                 | <a href="https://www.npmjs.com/package/@steeze-ui/radix-icons"><img src="https://img.shields.io/npm/v/@steeze-ui/radix-icons.svg?style=flat" /></a> |
| @steeze-ui/octicons (soon)                                      | default                 | [primer/octicons](https://github.com/primer/octicons)               |                                                                                                                                                     |
| @steeze-ui/feathericons (soon)                                  | default                 | [feathericons/feather](https://github.com/feathericons/feather)     |                                                                                                                                                     |

### Utilities

| Package                           | Version                                                                                                                                 |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [@steeze-ui/icons](packages/core) | <a href="https://www.npmjs.com/package/@steeze-ui/icons"><img src="https://img.shields.io/npm/v/@steeze-ui/icons.svg?style=flat" /></a> |

## Development

This monorepo uses pnpm. To build a new version of the packages just run:

```bash
pnpm install && pnpm package
```

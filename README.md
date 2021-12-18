# READ THIS FIRST

This project is still in experimental development. Expect bugs and breaking changes!

## Overview

Effortless Icons

- Icon components (for now it's svelte first)
- Popular Icon Packs
- Icon Pack Themes (different versions of the same icon)
- Templates to Create your own Icon Packs

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
| [@steeze-ui/lit-icon](packages/components/lit-icon)       | soon                                                                                                                                                |
| [@steeze-ui/react-icon](packages/components/react-icon)   | soon                                                                                                                                                |
| [@steeze-ui/vue-icon](packages/components/vue-icon)       | soon                                                                                                                                                |

### Icon Packs

| Package                                                                 | Themes                  | Source                                                              |
| ----------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------- |
| [@steeze-ui/heroicons](packages/builders/heroicons-builder)             | default(outline), solid | [tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons) |
| [@steeze-ui/iconic-free](packages/builders/radix-icons-builder) soon    | default                 | [iconic.app](https://iconic.app/)                                   |
| [@steeze-ui/radix-icons](packages/builders/radix-icons-builder) soon    | default                 | [radix-ui/icons](https://github.com/radix-ui/icons)                 |
| [@steeze-ui/octicons](packages/builders/octicons-builder) soon          | default                 | [primer/octicons](https://github.com/primer/octicons)               |
| [@steeze-ui/feathericons](packages/builders/feather-icons-builder) soon | default                 | [feathericons/feather](https://github.com/feathericons/feather)     |

## Development

This monorepo uses pnpm. To build a new version of the packages just run:

```bash
pnpm install && pnpm package
```

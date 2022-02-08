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

<Icon src={LightningBolt} theme='solid' class='color-gray-900'/>
```

## Packages

### Icon Components

| Package                                                   | Version                                                                                                                                             |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@steeze-ui/svelte-icon](packages/components/svelte-icon) | <a href="https://www.npmjs.com/package/@steeze-ui/svelte-icon"><img src="https://img.shields.io/npm/v/@steeze-ui/svelte-icon.svg?style=flat" /></a> |
| [@steeze-ui/lit-icon](packages/components/lit-icon)       | <a href="https://www.npmjs.com/package/@steeze-ui/lit-icon"><img src="https://img.shields.io/npm/v/@steeze-ui/lit-icon.svg?style=flat" /></a>       |
| [@steeze-ui/solid-icon](packages/components/solid-icon)   | <a href="https://www.npmjs.com/package/@steeze-ui/solid-icon"><img src="https://img.shields.io/npm/v/@steeze-ui/solid-icon.svg?style=flat" /></a>   |
| [@steeze-ui/react-icon](packages/components/react-icon)   | <a href="https://www.npmjs.com/package/@steeze-ui/react-icon"><img src="https://img.shields.io/npm/v/@steeze-ui/react-icon.svg?style=flat" /></a>   |
| @steeze-ui/vue-icon                                       | planned                                                                                                                                             |

### Icon Packs

| Package                                                             | Themes                                             | Source                                                                                                 | Version                                                                                                                                                 |
| ------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@steeze-ui/heroicons](packages/builders/heroicons-builder)         | default(outline), solid                            | [tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons)                                    | <a href="https://www.npmjs.com/package/@steeze-ui/heroicons"><img src="https://img.shields.io/npm/v/@steeze-ui/heroicons.svg?style=flat" /></a>         |
| [@steeze-ui/radix-icons](packages/builders/radix-icons-builder)     | default                                            | [radix-ui/icons](https://github.com/radix-ui/icons)                                                    | <a href="https://www.npmjs.com/package/@steeze-ui/radix-icons"><img src="https://img.shields.io/npm/v/@steeze-ui/radix-icons.svg?style=flat" /></a>     |
| [@steeze-ui/iconic-free](packages/builders/iconic-free-builder)     | default                                            | [iconic.app](https://iconic.app/)                                                                      | <a href="https://www.npmjs.com/package/@steeze-ui/iconic-free"><img src="https://img.shields.io/npm/v/@steeze-ui/iconic-free.svg?style=flat" /></a>     |
| [@steeze-ui/feather-icons](packages/builders/feather-icons-builder) | default                                            | [feathericons/feather](https://github.com/feathericons/feather)                                        | <a href="https://www.npmjs.com/package/@steeze-ui/feather-icons"><img src="https://img.shields.io/npm/v/@steeze-ui/feather-icons.svg?style=flat" /></a> |
| [@steeze-ui/octicons](packages/builders/octicons-builder)           | default(16), 24, 12                                | [primer/octicons](https://github.com/primer/octicons)                                                  | <a href="https://www.npmjs.com/package/@steeze-ui/octicons"><img src="https://img.shields.io/npm/v/@steeze-ui/octicons.svg?style=flat" /></a>           |
| [@steeze-ui/remix-icons](packages/builders/remix-icons-builder)     | default(outline), solid                            | [Remix-Design/RemixIcon](https://github.com/Remix-Design/remixicon)                                    | <a href="https://www.npmjs.com/package/@steeze-ui/remix-icons"><img src="https://img.shields.io/npm/v/@steeze-ui/remix-icons.svg?style=flat" /></a>     |
| @steeze-ui/md-icons (planned)                                       | default(outlined), filled, rounded, sharp, twotone | [google/material-design-icons](https://github.com/google/material-design-icons)                        |                                                                                                                                                         |
| @steeze-ui/carbon-icons (planned)                                   | default                                            | [carbon-design-system/carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons) |                                                                                                                                                         |

### Utilities

| Package                           | Version                                                                                                                                 |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [@steeze-ui/icons](packages/core) | <a href="https://www.npmjs.com/package/@steeze-ui/icons"><img src="https://img.shields.io/npm/v/@steeze-ui/icons.svg?style=flat" /></a> |

## Development

This monorepo uses pnpm. To build a new version of the packages just run:

```bash
pnpm install && pnpm package
```

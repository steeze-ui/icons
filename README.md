> Need Accessible components for your next SvelteKit project ? Check out [@steeze-ui/components](https://github.com/steeze-ui/components)!

## Overview

Effortless Icons

- Icon components for different frameworks/libraries
- Popular Icon Packs (Heroicons, Lucide Icons, etc.)
- Icon Themes (different versions of the same icon)
- [Builder Template](https://github.com/steeze-ui/icons/tree/main/packages/builders/template-builder) to Create your own Icon Packs

```html
<!-- svelte example -->
<script>
	import { Icon } from '@steeze-ui/svelte-icon'
	import { LightningBolt } from '@steeze-ui/heroicons'
</script>

<Icon src="{LightningBolt}" theme="solid" class="color-gray-900" />
```

## Deploy your own Icon Pack

Copy the [Builder Template](https://github.com/steeze-ui/icons/tree/main/packages/builders/template-builder) to easily create and publish your own Icon Pack.

## Packages

### Icon Components

| Package                                                   | Version                                                                                                                                             |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@steeze-ui/svelte-icon](packages/components/svelte-icon) | <a href="https://www.npmjs.com/package/@steeze-ui/svelte-icon"><img src="https://img.shields.io/npm/v/@steeze-ui/svelte-icon.svg?style=flat" /></a> |
| [@steeze-ui/lit-icon](packages/components/lit-icon)       | <a href="https://www.npmjs.com/package/@steeze-ui/lit-icon"><img src="https://img.shields.io/npm/v/@steeze-ui/lit-icon.svg?style=flat" /></a>       |
| [@steeze-ui/solid-icon](packages/components/solid-icon)   | <a href="https://www.npmjs.com/package/@steeze-ui/solid-icon"><img src="https://img.shields.io/npm/v/@steeze-ui/solid-icon.svg?style=flat" /></a>   |
| [@steeze-ui/react-icon](packages/components/react-icon)   | <a href="https://www.npmjs.com/package/@steeze-ui/react-icon"><img src="https://img.shields.io/npm/v/@steeze-ui/react-icon.svg?style=flat" /></a>   |
| [@steeze-ui/vue-icon](packages/components/vue-icon)       | <a href="https://www.npmjs.com/package/@steeze-ui/vue-icon"><img src="https://img.shields.io/npm/v/@steeze-ui/vue-icon.svg?style=flat" /></a>       |

### Icon Packs

| Package                                                                              | Themes                                             | Sources                                                                                                | Browser                                                            | Package Version                                                                                                                                                         | Src Version |
| ------------------------------------------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [@steeze-ui/heroicons](packages/builders/heroicons-builder)                          | default(outline), solid, mini                      | [tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons)                                    | [browse](https://heroicons.com/)                                   | <a href="https://www.npmjs.com/package/@steeze-ui/heroicons"><img src="https://img.shields.io/npm/v/@steeze-ui/heroicons.svg?style=flat" /></a>                         | 2.0.16      |
| [@steeze-ui/material-design-icons](packages/builders/material-design-icons-builder/) | default(filled), outlined, rounded, sharp, twotone | [google/material-design-icons](https://github.com/google/material-design-icons)                        | [browse](https://fonts.google.com/icons)                           | <a href="https://www.npmjs.com/package/@steeze-ui/material-design-icons"><img src="https://img.shields.io/npm/v/@steeze-ui/material-design-icons.svg?style=flat" /></a> | 1.12.1      |
| [@steeze-ui/feather-icons](packages/builders/lucide-icons-builder)                   | default                                            | [lucide-icons/lucide](https://github.com/lucide-icons/lucide)                                          | [browse](https://lucide.dev/)                                      | <a href="https://www.npmjs.com/package/@steeze-ui/lucide-icons"><img src="https://img.shields.io/npm/v/@steeze-ui/lucide-icons.svg?style=flat" /></a>                   | 0.129.0     |
| [@steeze-ui/simple-icons](packages/builders/simple-icons-builder/)                   | default                                            | [simple-icons/simple-icons](https://github.com/simple-icons/simple-icons)                              | [browse](https://simpleicons.org/)                                 | <a href="https://www.npmjs.com/package/@steeze-ui/simple-icons"><img src="https://img.shields.io/npm/v/@steeze-ui/simple-icons.svg?style=flat" /></a>                   | 8.5.0       |
| [@steeze-ui/carbon-icons](packages/builders/carbon-icons-builder/)                   | default                                            | [carbon-design-system/carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons) | [browse](https://carbondesignsystem.com/guidelines/icons/library/) | <a href="https://www.npmjs.com/package/@steeze-ui/carbon-icons"><img src="https://img.shields.io/npm/v/@steeze-ui/carbon-icons.svg?style=flat" /></a>                   | 11.7.0      |
| [@steeze-ui/remix-icons](packages/builders/remix-icons-builder)                      | default(outline), solid                            | [Remix-Design/RemixIcon](https://github.com/Remix-Design/remixicon)                                    | [browse](https://remixicon.com/)                                   | <a href="https://www.npmjs.com/package/@steeze-ui/remix-icons"><img src="https://img.shields.io/npm/v/@steeze-ui/remix-icons.svg?style=flat" /></a>                     | 2.5.0       |
| [@steeze-ui/radix-icons](packages/builders/radix-icons-builder)                      | default                                            | [radix-ui/icons](https://github.com/radix-ui/icons)                                                    | [browse](https://icons.modulz.app/)                                | <a href="https://www.npmjs.com/package/@steeze-ui/radix-icons"><img src="https://img.shields.io/npm/v/@steeze-ui/radix-icons.svg?style=flat" /></a>                     | 5.0.0       |
| [@steeze-ui/iconic-free](packages/builders/iconic-free-builder)                      | default                                            | [iconic.app](https://iconic.app/)                                                                      | [browse](https://iconic.app/c/availability/free/)                  | <a href="https://www.npmjs.com/package/@steeze-ui/iconic-free"><img src="https://img.shields.io/npm/v/@steeze-ui/iconic-free.svg?style=flat" /></a>                     | -           |
| [@steeze-ui/octicons](packages/builders/octicons-builder)                            | default(16), 24, 12                                | [primer/octicons](https://github.com/primer/octicons)                                                  | [browse](https://primer.style/octicons/)                           | <a href="https://www.npmjs.com/package/@steeze-ui/octicons"><img src="https://img.shields.io/npm/v/@steeze-ui/octicons.svg?style=flat" /></a>                           | 17.5.0      |
| [@steeze-ui/tabler-icons](packages/builders/tabler-icons-builder/)                   | default                                            | [tabler/tabler-icons](https://github.com/tabler/tabler-icons)                                          | [browse](https://tabler-icons.io/)                                 | <a href="https://www.npmjs.com/package/@steeze-ui/tabler-icons"><img src="https://img.shields.io/npm/v/@steeze-ui/tabler-icons.svg?style=flat" /></a>                   | 1.111.0     |
| [@steeze-ui/css-gg](packages/builders/css-gg-builder/)                               | default                                            | [CSS.gg Icons](https://css.gg/)                                                                        | [browse](https://css.gg/app)                                       | <a href="https://www.npmjs.com/package/@steeze-ui/css-gg"><img src="https://img.shields.io/npm/v/@steeze-ui/css-gg.svg?style=flat" /></a>                               | 2.0.0       |
| [@steeze-ui/feather-icons](packages/builders/feather-icons-builder) (deprecated)     | default                                            | [feathericons/feather](https://github.com/feathericons/feather)                                        | [browse](https://feathericons.com/)                                | <a href="https://www.npmjs.com/package/@steeze-ui/feather-icons"><img src="https://img.shields.io/npm/v/@steeze-ui/feather-icons.svg?style=flat" /></a>                 | 4.29.0      |

### Utilities

| Package                           | Version                                                                                                                                 |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [@steeze-ui/icons](packages/core) | <a href="https://www.npmjs.com/package/@steeze-ui/icons"><img src="https://img.shields.io/npm/v/@steeze-ui/icons.svg?style=flat" /></a> |

## Development

This monorepo uses pnpm. To build a new version of the packages just run:

```bash
pnpm install && pnpm package
```

# READ THIS FIRST

This project is still in experimental development. Expect bugs and breaking changes!

## Overview

Effortless Lit Icon Component

- Made and Tested for Vite environments
- Usable with all official [Icon Packs](https://github.com/steeze-ui/icons/)
- Dynamically change theme on runtime

## How to use

### Installation

```bash
npm i @steeze-ui/lit-icon
```

### Import

```js
//import icon component
import '@steeze-ui/lit-icon'

//import as many icons from a Icon Pack
import { LightningBolt } from '@steeze-ui/heroicons'
```

### Usage

```html
<lit-icon .src="${LightningBolt}" theme="solid" size="1rem" />
```

## Documentation

### Icon attributes

| Attribute   | Default | Description                                                         |
| ----------- | ------- | ------------------------------------------------------------------- |
| .src        | -       | (required) The source of a icon coming from an Icon Pack            |
| theme       | default | Configures to use a Icon Theme if available (otherwise use default) |
| size        | 100%    | Configures width and height                                         |
| class       | -       | Configures width and height                                         |
| style       | -       | Configures styles for the svg (e.g "color:red")                     |
| aria-hidden | true    | Configures visibility for screen-readers                            |
| aria-label  | -       | Configures label for screen-readers                                 |

### Icon Packs

For all available Icon Packs visit [steeze-ui/icons](https://github.com/steeze-ui/icons)

## Development

This repo uses pnpm. To build a new version of the package just run:

```bash
pnpm install && pnpm package && cd package && pnpm publish
```

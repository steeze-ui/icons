import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'

import './index'
import { Search } from '@steeze-ui/heroicons'
// import * as HeroIcons from '@steeze-ui/heroicons'
// import * as RadixIcons from '@steeze-ui/radix-icons'
// import * as IconicFreeIcons from '@steeze-ui/iconic-free'
// import * as OcticonsIcons from '@steeze-ui/octicons'
// import * as FeatherIcons from '@steeze-ui/feather-icons'

// const HeroIconsMap = HeroIcons as any
// const RadixIconsMap = RadixIcons as any
// const IconicFreeIconsMap = IconicFreeIcons as any
// const OcticonsIconsMap = OcticonsIcons as any
// const FeatherIconsMap = FeatherIcons as any

@customElement('icons-test')
export class IconsTest extends LitElement {
	static styles = css`
		lit-icon {
			color: blue;
		}
	`

	@property()
	iconSize = '16px'

	@property()
	iconStyle = 'color:rgb(237, 237, 238)'

	@property({ type: Boolean })
	isSolid = false

	render() {
		return html`
			<div style="display:flex;  gap:1rem">
				<lit-icon .src=${Search} size="16px"></lit-icon>
				<lit-icon .src=${Search} size="16px"></lit-icon>
			</div>
		`
	}
}

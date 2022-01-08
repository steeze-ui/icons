import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'

import './lit-icon'
import * as HeroIcons from '@steeze-ui/heroicons'
import * as RadixIcons from '@steeze-ui/radix-icons'
import * as IconicFreeIcons from '@steeze-ui/iconic-free'
import * as OcticonsIcons from '@steeze-ui/octicons'

const HeroIconsMap = HeroIcons as any
const RadixIconsMap = RadixIcons as any
const IconicFreeIconsMap = IconicFreeIcons as any
const OcticonsIconsMap = OcticonsIcons as any

@customElement('icons-test')
export class IconsTest extends LitElement {
	@property()
	iconSize = '1.25rem'

	@property()
	iconStyle = 'color:rgb(237, 237, 238)'

	@property({ type: Boolean })
	isSolid = false

	render() {
		return html`
			<div style="display:flex; flex-direction:column; gap:1rem">
				<div>
					<div style="display:flex; gap:2rem; align-items:center">
						<h1 style="color:white">Heroicons</h1>

						<div>
							<input
								type="checkbox"
								?checked=${this.isSolid}
								@change=${(e: any) => {
									this.isSolid = e.target.checked
								}}
							/>
							<label style="color:white" for="toggle">solid</label>
						</div>
					</div>
					<div style="display:flex;gap:2rem; flex-wrap:wrap">
						${repeat(
							Object.keys(HeroIconsMap),
							(key: string) => key,
							(key: string) => html`
								<lit-icon
									.src=${HeroIconsMap[key]}
									theme="${this.isSolid ? 'solid' : 'default'}"
									size="${this.iconSize}"
									style="${this.iconStyle}"
								></lit-icon>
							`
						)}
					</div>
				</div>

				<div>
					<h1 style="color:white">Radix Icons</h1>
					<div style="display:flex;gap:2rem; flex-wrap:wrap">
						${repeat(
							Object.keys(RadixIconsMap),
							(key: string) => key,
							(key: string) => html`
								<lit-icon
									id="${key}"
									.src=${RadixIconsMap[key]}
									.size="${this.iconSize}"
									.style="${this.iconStyle}"
								></lit-icon>
							`
						)}
					</div>
				</div>
				<div>
					<h1 style="color:white">Iconic Free Icons</h1>
					<div style="display:flex;gap:2rem; flex-wrap:wrap">
						${repeat(
							Object.keys(IconicFreeIconsMap),
							(key: string) => key,
							(key: string) => html`
								<lit-icon
									id="${key}"
									.src=${IconicFreeIconsMap[key]}
									.size="${this.iconSize}"
									.style="${this.iconStyle}"
								></lit-icon>
							`
						)}
					</div>
				</div>
				<div>
					<h1 style="color:white">Octicons</h1>
					<div style="display:flex;gap:2rem; flex-wrap:wrap">
						${repeat(
							Object.keys(OcticonsIconsMap),
							(key: string) => key,
							(key: string) => html`
								<lit-icon
									id="${key}"
									.src=${OcticonsIconsMap[key]}
									.size="${this.iconSize}"
									.style="${this.iconStyle}"
								></lit-icon>
							`
						)}
					</div>
				</div>
			</div>
		`
	}
}

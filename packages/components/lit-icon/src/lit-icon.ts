import { html, LitElement } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'
import { customElement, property, state } from 'lit/decorators.js'

import { AcademicCap } from '@steeze-ui/heroicons'

@customElement('lit-icon')
export class LitIcon extends LitElement {
	@property()
	theme = 'default'

	@property({ type: Object })
	src: any = AcademicCap

	@state()
	protected _icon: any = this.src?.[this.theme] ?? this.src?.['default']

	connectedCallback(): void {
		super.connectedCallback()
		// this.style.width = '24px'
		// this.style.height = '24px'
		// this.style.color = 'red'
	}

	render() {
		return html`
			<div>
				<svg
					style="color:red; width:50px; height:50px;"
					fill=${this._icon.a['fill']}
					stroke=${ifDefined(this._icon.a['stroke'])}
					viewBox=${this._icon.a['viewBox']}
					xmlns=${this._icon.a['xmlns']}
				>
					${this._icon.p.map(
						(e: any) => html`<path
							stroke-linecap="${ifDefined(e['stroke-linecap'])}"
							stroke-linejoin="${ifDefined(e['stroke-linejoin'])}"
							stroke-width="${ifDefined(e['stroke-width'])}"
							d=${e.d}
						/>`
					)}
				</svg>
				<svg
					style="width:50px; height:50px; color:blue"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M12 14l9-5-9-5-9 5 9 5z"></path>
					<path
						d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
					></path>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
					></path>
				</svg>
			</div>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-icon': LitIcon
	}
}

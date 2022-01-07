import { html, LitElement } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'
import { unsafeSVG } from 'lit/directives/unsafe-svg.js'
import { customElement, property } from 'lit/decorators.js'

@customElement('lit-icon')
export class LitIcon extends LitElement {
	@property({ type: Object })
	src: any = {}

	@property()
	theme = 'default'

	@property()
	size = '100%'

	@property({ attribute: 'style' })
	styleProp = ''

	@property({ attribute: 'class' })
	classProp = ''

	@property({ attribute: 'aria-hidden', type: Boolean })
	ariaHiddenProp = false

	render() {
		return html`
			<svg
				width="${this.size}"
				height="${this.size}"
				aria-hidden=${this.ariaHiddenProp}
				style=${ifDefined(this.styleProp ? this.styleProp : undefined)}
				class=${ifDefined(this.classProp ? this.classProp : undefined)}
				fill=${ifDefined(this.src?.[this.theme]?.a?.['fill'] ?? undefined)}
				stroke=${ifDefined(this.src?.[this.theme]?.a?.['stroke'] ?? undefined)}
				viewBox=${ifDefined(this.src?.[this.theme]?.a?.['viewBox'] ?? undefined)}
				xmlns=${ifDefined(this.src?.[this.theme]?.a?.['xmlns'] ?? undefined)}
			>
				${unsafeSVG(
					this.src[this.theme]?.p
						.map(
							(e: any) =>
								`<path ${e['fill'] ? 'fill=' + e['fill'] : ''} ${
									e['clip-rule'] ? 'clip-rule=' + e['clip-rule'] : ''
								} ${e['fill-rule'] ? 'fill-rule=' + e['fill-rule'] : ''} ${
									e['stroke-linecap'] ? 'stroke-linecap=' + e['stroke-linecap'] : ''
								} ${e['stroke-linejoin'] ? 'stroke-linejoin=' + e['stroke-linejoin'] : ''} ${
									e['stroke-width'] ? 'stroke-width=' + e['stroke-width'] : ''
								} d="${e.d}"></path>`
						)
						.join('') ?? [].join('')
				)}
			</svg>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'lit-icon': LitIcon
	}
}

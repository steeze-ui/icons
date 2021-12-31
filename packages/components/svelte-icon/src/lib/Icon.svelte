<script lang="ts">
	import type { IconSource } from './types/index'

	export let src: IconSource
	export let size = '100%'
	export let theme = 'default'
	let customClass = ''
	export { customClass as class }

	$: icon = src?.[theme] ?? src?.['default']

	if (size !== '100%') {
		if (size.slice(-1) != 'x' && size.slice(-1) != 'm' && size.slice(-1) != '%') {
			try {
				size = parseInt(size) + 'px'
			} catch (error) {
				size = '100%'
			}
		}
	}
</script>

<svg {...icon.a} class={customClass} width={size} height={size} {...$$restProps}>
	{#each icon.p ?? [] as att}
		<path {...att} />
	{/each}
</svg>

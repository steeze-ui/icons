<script lang="ts">
	import type { IconSource } from './types/index'

	export let src: IconSource
	export let size = '100%'
	export let theme = 'default'

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

<svg {...icon.a} width={size} height={size} {...$$restProps}>
	{#each icon?.path ?? [] as att}
		<path {...att} />
	{/each}
	{#each icon?.rect ?? [] as att}
		<rect {...att} />
	{/each}
	{#each icon?.circle ?? [] as att}
		<circle {...att} />
	{/each}
</svg>

<script lang="ts">
	import type { IconSource } from './types/index'

	export let src: IconSource
	export let size = '100%'
	export let theme = 'default'

	$: icon = src?.[theme]

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

{#if icon}
	<svg {...icon?.a} xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...$$restProps}>
		{#each icon?.path ?? [] as a}
			<path {...a} />
		{/each}
		{#each icon?.rect ?? [] as a}
			<rect {...a} />
		{/each}
		{#each icon?.circle ?? [] as a}
			<circle {...a} />
		{/each}
		{#each icon?.polygon ?? [] as a}
			<polygon {...a} />
		{/each}
		{#each icon?.polyline ?? [] as a}
			<polyline {...a} />
		{/each}
		{#each icon?.line ?? [] as a}
			<line {...a} />
		{/each}
	</svg>
{/if}

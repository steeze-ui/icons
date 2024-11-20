<script lang="ts">
	import type { IconSource } from './index.js'

	let { src, size = '100%', theme = 'default', title = undefined, ...restProps } : {
		src: IconSource,
		size?: string,
		theme?: string,
		title?: string,
		[key: string]: any
	} = $props()

	const icon = $derived(src?.[theme] ?? src?.['default'] ?? Object.values(src)?.[0])

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

<svg {...icon?.a} xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...restProps}>
	{#if title}
		<title>{title}</title>
	{/if}

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

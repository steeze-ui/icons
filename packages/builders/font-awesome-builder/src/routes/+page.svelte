<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon'
	import * as Icons from '$lib/index.js'

	const icons: any = Icons

	const themes = Object.keys(icons[Object.keys(icons)[0]])

	let theme = 'default'
</script>

<h1>@steeze-ui/font-awesome</h1>

<label for="theme-select">Theme</label>
<select id="theme-select" bind:value={theme}>
	{#each themes as th}
		<option value={th}>{th}</option>
	{/each}
</select>
<div>
	{#each Object.keys(icons) as Src}
		<Icon src={icons[Src]} size="24px" {theme} />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>

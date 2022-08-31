<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon'
	import * as Icons from '$lib'

	const themes = Object.keys(Icons[Object.keys(Icons)[0]])

	let theme = 'default'
</script>

<h1>@steeze-ui/carbon-icons</h1>

<label for="theme-select">Theme</label>
<select id="theme-select" bind:value={theme}>
	{#each themes as th}
		<option value={th}>{th}</option>
	{/each}
</select>
<div>
	{#each Object.keys(Icons) as Src}
		<Icon src={Icons[Src]} size="24px" {theme} />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>

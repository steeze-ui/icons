<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon'
	import * as Icons from '$lib'
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>
	{#each Object.keys(Icons) as Src}
		<Icon src={Icons[Src]} size="24" />
	{/each}
</div>

<style>
	div {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}
</style>

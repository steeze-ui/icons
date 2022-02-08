<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon'
	// import * as Icons from '$lib'
	import { Aliens } from '$lib'

	let theme = 'default'

	// let count = Object.keys(Icons).length - 1
</script>

<!-- count: {count} -->
<div>
	<label for="default">default</label>
	<input id="default" type="radio" bind:group={theme} value="default" />
	<label for="solid">solid</label>
	<input type="radio" bind:group={theme} value="solid" />
</div>
<div>
	<!-- {#each Object.keys(Icons) as icon}
		{/each} -->
	<Icon src={Aliens} size="20" {theme} />
</div>

<style>
	div {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
</style>

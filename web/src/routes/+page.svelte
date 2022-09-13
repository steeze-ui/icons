<script lang="ts">
	import IconSetSection from '$lib/icons/IconSetSection.svelte';
	import { icons } from '$lib/stores/icons';
	import { TextField } from '@steeze-ui/components';
	import { MagnifyingGlass } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	let search = '';

	let iconSets = Object.keys($icons.map);
</script>

<div class="flex flex-col gap-2 w-full p-4 overflow-hidden">
	<TextField bind:value={search} width="100%">
		<Icon src={MagnifyingGlass} slot="prefix" size="20px" color="var(--st-body-text-color)" />
	</TextField>

	<div class="flex flex-col gap-3 w-full overflow-auto">
		{#each iconSets as iconSet}
			<IconSetSection
				icons={$icons.map[iconSet].icons}
				name={iconSet}
				themes={$icons.map[iconSet].themes}
				bind:search
			/>
		{/each}
	</div>
</div>

<style>
</style>

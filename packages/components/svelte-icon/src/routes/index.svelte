<script lang="ts">
	import Icon from '$lib/Icon.svelte'
	import * as HeroIcons from '@steeze-ui/heroicons'
	import * as RadixIcons from '@steeze-ui/radix-icons'
	import * as IconicFreeIcons from '@steeze-ui/iconic-free'

	let isSolid = false
</script>

<div style="display:flex; flex-direction:column; gap:1rem">
	<div>
		<div style="display:flex;gap:2rem; align-items:center">
			<h1 style="color:white">Heroicons</h1>
			<div>
				<input id="solid-toggle" type="checkbox" bind:checked={isSolid} />
				<label for="solid-toggle" style="color:white">solid</label>
			</div>
		</div>
		<div style="display:flex;gap:2rem; flex-wrap:wrap">
			{#each Object.keys(HeroIcons) as key}
				<Icon
					src={HeroIcons[key]}
					theme={isSolid ? 'solid' : 'default'}
					size="1rem"
					style="color:rgb(237, 237, 238)"
				/>
			{/each}
		</div>
	</div>

	<div>
		<h1 style="color:white">Radix Icons</h1>
		<div style="display:flex;gap:2rem; flex-wrap:wrap">
			{#each Object.keys(RadixIcons) as key}
				<Icon src={RadixIcons[key]} size="1rem" style="color:rgb(237, 237, 238)" />
			{/each}
		</div>
	</div>

	<div>
		<h1 style="color:white">Iconic Free Icons</h1>
		<div style="display:flex;gap:2rem; flex-wrap:wrap">
			{#each Object.keys(IconicFreeIcons) as key}
				<Icon src={IconicFreeIcons[key]} size="1rem" style="color:rgb(237, 237, 238)" />
			{/each}
		</div>
	</div>
</div>

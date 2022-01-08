<script lang="ts">
	import Icon from '$lib/Icon.svelte'
	import * as HeroIcons from '@steeze-ui/heroicons'
	import * as RadixIcons from '@steeze-ui/radix-icons'
	import * as IconicFreeIcons from '@steeze-ui/iconic-free'
	import * as Octicons from '@steeze-ui/octicons'
	import * as FeatherIcons from '@steeze-ui/feather-icons'

	let isSolid = false

	let octiconsTheme = 'default'
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

	<div>
		<div style="display:flex;gap:2rem; align-items:center">
			<h1 style="color:white">Octicons</h1>
			<div style="display:flex; gap:1rem">
				<div>
					<input
						type="radio"
						id="default"
						name="octicons-theme"
						value="default"
						bind:group={octiconsTheme}
					/>
					<label for="default" style="color:white">default(16px)</label>
				</div>
				<div>
					<input type="radio" id="24" name="octicons-theme" value="24" bind:group={octiconsTheme} />
					<label for="24" style="color:white">24px</label>
				</div>
				<div>
					<input type="radio" id="12" name="octicons-theme" value="12" bind:group={octiconsTheme} />
					<label for="12" style="color:white">12px</label>
				</div>
			</div>
		</div>
		<div style="display:flex;gap:2rem; flex-wrap:wrap">
			{#each Object.keys(Octicons) as key}
				<Icon
					id={key}
					src={Octicons[key]}
					theme={octiconsTheme}
					size="1rem"
					style="color:rgb(237, 237, 238)"
				/>
			{/each}
		</div>
	</div>

	<div>
		<h1 style="color:white">Feather Icons</h1>
		<div style="display:flex;gap:2rem; flex-wrap:wrap">
			{#each Object.keys(FeatherIcons) as key}
				<Icon src={FeatherIcons[key]} size="1rem" style="color:rgb(237, 237, 238)" />
			{/each}
		</div>
	</div>
</div>

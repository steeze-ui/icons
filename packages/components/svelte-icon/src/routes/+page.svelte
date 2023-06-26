<script lang="ts">
	import { Icon } from '$lib/index.js'
	import type { IconSource } from '$lib/index.js'
	import * as HeroIcons from '@steeze-ui/heroicons'
	// import * as RadixIcons from '@steeze-ui/radix-icons'
	// import * as IconicFreeIcons from '@steeze-ui/iconic-free'
	// import * as Octicons from '@steeze-ui/octicons'
	// import * as FeatherIcons from '@steeze-ui/feather-icons'
	// import * as RemixIcons from '@steeze-ui/remix-icons'

	let isSolid = false

	const iconpacks: any = {
		Heroicons: {
			icons: HeroIcons,
			themes: ['default', 'solid'],
			activeTheme: 'default'
		}
		// RadixIcons: {
		// 	icons: RadixIcons,
		// 	themes: ['default'],
		// 	activeTheme: 'default'
		// },
		// IconicFreeIcons: {
		// 	icons: IconicFreeIcons,
		// 	themes: ['default'],
		// 	activeTheme: 'default'
		// },
		// Octicons: {
		// 	icons: Octicons,
		// 	themes: ['default', '24', '12'],
		// 	activeTheme: 'default'
		// },
		// FeatherIcons: {
		// 	icons: FeatherIcons,
		// 	themes: ['default'],
		// 	activeTheme: 'default'
		// },
		// RemixIcons: {
		// 	icons: RemixIcons,
		// 	themes: ['default', 'solid'],
		// 	activeTheme: 'default'
		// }
	}
</script>

<div style="display:flex; flex-direction:column; gap:1rem">
	{#each Object.keys(iconpacks) as iconpack}
		<div>
			<div style="display:flex;gap:2rem; align-items:center">
				<h1 style="color:white">{iconpack}</h1>
				<div style="display:flex; gap:1rem">
					{#each iconpacks[iconpack].themes as theme}
						{@const checked = theme === iconpacks[iconpack].activeTheme ? true : null}
						<div>
							<input
								type="radio"
								id={theme}
								name="{iconpack}-theme"
								value={theme}
								{checked}
								on:change={(e) => (iconpacks[iconpack].activeTheme = theme)}
							/>
							<label for={theme} style="color:white">{theme}</label>
						</div>
					{/each}
				</div>
			</div>
			<div style="display:flex;gap:2rem; flex-wrap:wrap">
				{#each Object.keys(iconpacks[iconpack].icons) as key}
					<Icon
						id={key}
						src={iconpacks[iconpack].icons[key]}
						theme={iconpacks[iconpack].activeTheme}
						size="1rem"
						style="color:rgb(237, 237, 238)"
						title={key}
					/>
				{/each}
			</div>
		</div>
	{/each}
</div>

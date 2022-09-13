<script lang="ts">
	import { ThemeProvider } from '@steeze-ui/components';
	import Header from '$lib/header/Header.svelte';
	import 'virtual:windi.css';
	import { afterNavigate } from '$app/navigation';
	import { menu } from '$lib/stores/menu';
	import MenuSection from '$lib/menu/MenuSection.svelte';
	import Menu from '$lib/menu/Menu.svelte';
	import MenuItem from '$lib/menu/MenuItem.svelte';
	import Logo from '$lib/header/Logo.svelte';
	import '@steeze-ui/components/base.css';
</script>

<ThemeProvider fromSystem />
<!-- <Header /> -->

<div class="flex flex-grow relative h-full">
	<Menu>
		<div part="logo-wrapper">
			<a href="/" class="flex gap-4 items-center">
				<Logo size="28px" />
			</a>
			<span part="name" class="font-semibold text-2xl" style="color:var(--st-body-text-color)">
				Steeze UI <span class="font-medium text-lg" style="color:var(--st-secondary-text-color)"
					>Icons</span
				>
			</span>
		</div>
		<MenuSection label="Icon Sets">
			<!-- {#each Object.keys($menu.map['Icons']) as label}
				<MenuItem {label} href={$menu.map['Icons'][label]} />
				{/each} -->
		</MenuSection>
		<MenuSection label="Components">
			<!-- {#each sortedItems as [label, href]}
					{@const isPlanned = href.startsWith('_')}
			{@const isHidden = href.startsWith('__')}
			{#if !isHidden}
			<MenuItem disabled={isPlanned} tag={isPlanned ? 'Planned' : ''} {label} {href} />
			{/if}
			{/each} -->
		</MenuSection>
		<MenuSection label="Guide">
			{#each Object.keys($menu.map['Guide']) as label}
				<MenuItem {label} href={$menu.map['Guide'][label]} />
			{/each}
		</MenuSection>
	</Menu>
	<div class="p-2 w-full h-full overflow-hidden">
		<main class="rounded-md shadow flex flex-col flex-grow max-w-full flex-1 h-full">
			<Header />
			<slot />
		</main>
	</div>
</div>

<style>
	a:focus-visible {
		outline: var(--st-outline-width) solid var(--st-outline-color);
		border-radius: var(--st-border-radius);
	}

	:global(.light header) {
		background-color: hsla(240, 3%, 99%, 0.8);
		border-color: var(--st-colors-light8);
	}

	[part='name'] {
		color: var(--st-body-text-color);
	}

	[part='logo-wrapper'] {
		display: flex;
		flex-direction: column;
		color: var(--st-body-text-color);
		margin: 0 0.5rem;
		gap: 0.25rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--st-contrast-10pct);
	}

	[part='logo-wrapper'] a,
	[part='logo-wrapper'] [part='name'] {
		padding-left: 1rem;
	}
</style>

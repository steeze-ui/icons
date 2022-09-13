<script lang="ts">
	import { page } from '$app/stores'

	export let label: string
	export let href: string
	export let disabled = false
	export let tag = ''

	$: active = $page.url.pathname === href
</script>

{#if disabled}
	<li
		part="menu-item"
		aria-disabled="true"
		data-disabled
		class="mx-2 text-sm py-1.25 pl-8 flex gap-2 items-center"
	>
		{label}
		{#if tag}
			<div part="menu-tag">
				{tag}
			</div>
		{/if}
	</li>
{:else}
	<li part="menu-item" data-active={active ? true : null}>
		<a {href} class="st-focus-ring rounded mx-2 text-sm py-1.25 pl-8">
			{label}
		</a>
	</li>
{/if}

<style>
	[data-active] a {
		outline-style: solid;
		outline-offset: 0;
		outline-color: var(--st-colors-primary7);
		outline-width: var(--st-outline-width);
	}
	:global(.light [data-active] a) {
		outline-width: 0 !important;
	}
	:global(.light [data-active] a:focus-visible) {
		outline-color: var(--st-outline-color) !important;
		outline-width: var(--st-outline-width) !important;
	}

	a {
		display: flex;
		text-decoration-color: transparent;
		border: 0;
		border-color: transparent;
		height: 100%;
	}

	li[data-disabled] {
		user-select: none;
	}

	[part='menu-tag'] {
		font-size: var(--st-font-size-xs);
		border-radius: var(--st-border-radius);
		background-color: var(--st-colors-dark5);
		padding: 0 0.3rem;
	}
	:global(.light [part='menu-tag']) {
		background-color: var(--st-colors-light3) !important;
		color: var(--st-colors-gray4) !important;
	}

	[part='menu-item'] {
		color: var(--st-colors-gray4);
	}
	:global(.light [part='menu-item'] a) {
		color: var(--st-colors-gray9) !important;
	}

	[part='menu-item'][data-active] a {
		color: white;
		background-color: var(--st-colors-primary9);
	}
	:global(.light [part='menu-item'][data-active] a) {
		color: var(--st-colors-primary5) !important;
		background-color: var(--st-colors-primary1) !important;
	}

	[part='menu-item']:not([data-active]):not([data-disabled]) a:hover {
		background-color: var(--st-colors-primary9);
	}
	:global(.light [part='menu-item']:not([data-active]):not([data-disabled]) a:hover) {
		background-color: var(--st-colors-primary1) !important;
	}

	[part='menu-item'][data-disabled] {
		color: var(--st-colors-gray7);
	}
	:global(.light [part='menu-item'][data-disabled]) {
		color: var(--st-colors-gray4) !important;
	}
</style>

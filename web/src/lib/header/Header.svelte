<script lang="ts">
	import { ThemeToggle } from '@steeze-ui/components';
	// import { Bars3 } from '@steeze-ui/heroicons'
	import { GithubLogo } from '@steeze-ui/radix-icons';
	import { Icon } from '@steeze-ui/svelte-icon';
	// import { menu } from '../stores/menu';
	import Logo from './Logo.svelte';
</script>

<header class="flex flex-shrink-0 w-full px-4 pt-3 z-50 w-full  items-center justify-end">
	<div class="flex gap-6 items-center">
		<ThemeToggle />
		<a
			part="github-link"
			href="https://github.com/steeze-ui/components"
			aria-label="Link to GitHub Repository"
			class="rounded flex align-center st-focus-ring"
		>
			<Icon src={GithubLogo} size="22" class="hover:text-gray-300/90" />
		</a>
	</div>
</header>

<style>
	a:focus-visible {
		outline: var(--st-outline-width) solid var(--st-outline-color);
		border-radius: var(--st-border-radius);
	}

	[part='github-link'] {
		color: var(--st-body-text-color);
	}
</style>

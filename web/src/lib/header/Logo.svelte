<script lang="ts">
	export let size = '24px'
	export let theme = ''
</script>

<img part="logo" data-theme={theme} alt="logo" src="/logo-v1.svg" width={size} height={size} />

<style>
	:global(.light [part='logo']) {
		background-color: var(--st-colors-dark8);
		padding: 4px;
		border-radius: var(--st-border-radius-md);
	}

	:global(.light [part='logo'][data-theme*='large']) {
		padding: 12px;
		border-radius: var(--st-border-radius-2xl);
	}
</style>

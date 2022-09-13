<script lang="ts">
	export let label: string
</script>

<li class="flex flex-col gap-1">
	<div class="flex gap-4 items-center justify-between mx-2">
		<span class="st font-medium py-1 pl-4">{label}</span>
		<slot name="label-suffix" />
	</div>
	<ul class="flex flex-col gap-1">
		<slot />
	</ul>
</li>

<style>
	span {
		color: var(--st-colors-gray4);
	}

	:global(.light span.st) {
		color: var(--st-colors-gray5);
	}
</style>

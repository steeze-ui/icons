<script>
	import { Bars3, XMark } from '@steeze-ui/heroicons';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { menu } from '../stores/menu';
</script>

<aside
	class="{$menu.opened
		? 'flex'
		: 'hidden'} z-50 flex-col flex-nowrap h-full py-4 w-64 justify-start items-stretch overflow-auto relative md:flex "
>
	<button class="flex top-5 right-5 absolute md:hidden" on:click={() => menu.setOpened(false)}>
		<Icon src={XMark} size="18" color="white" />
	</button>
	<ul class="flex flex-col gap-4">
		<slot />
	</ul>
</aside>
<div
	class="rounded-full flex md:hidden bg-primary-900/20 h-12 top-[92vh] left-5 w-12 z-40 fixed items-center justify-center backdrop-filter backdrop-blur-md"
>
	<button
		class="flex items-center justify-center"
		on:click={() => menu.setOpened(true)}
		aria-label="toggle menu"
	>
		<Icon src={Bars3} size="22" color="white" />
	</button>
</div>

<style>
</style>

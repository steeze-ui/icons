/* eslint-disable @typescript-eslint/no-explicit-any */
import { writable } from 'svelte/store';

const menuMap = {
	Guide: {
		'Getting Started': '/guide/getting-started',
		Themes: '/guide/themes'
	}
};

const createMenuStore = () => {
	const { subscribe, update } = writable({
		map: menuMap as any,
		opened: false
	});

	return {
		subscribe: subscribe,
		setOpened: (value: boolean) => update((state) => ({ ...state, opened: value })),
		toggleOpened: () => update((state) => ({ ...state, opened: !state.opened }))
	};
};

export const menu = createMenuStore();

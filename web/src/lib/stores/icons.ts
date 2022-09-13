import { writable } from 'svelte/store';
import * as Heroicons from '@steeze-ui/heroicons';
import * as FeatherIcons from '@steeze-ui/feather-icons';
import * as SimpleIcons from '@steeze-ui/simple-icons';
import * as RadixIcons from '@steeze-ui/radix-icons';
import * as RemixIcons from '@steeze-ui/remix-icons';
import * as CarbonIcons from '@steeze-ui/carbon-icons';
import * as CssGGIcons from '@steeze-ui/css-gg';
import * as IconicFreeIcons from '@steeze-ui/iconic-free';
import * as Octicons from '@steeze-ui/octicons';

const map = {
	Heroicons: {
		icons: Heroicons,
		themes: ['default', 'solid', 'mini']
	},
	Feather: {
		icons: FeatherIcons
	},
	'Simple Icons': {
		icons: SimpleIcons
	},
	'Carbon Icons': {
		icons: CarbonIcons,
		themes: ['default', '16', '20', '24']
	},
	'Radix Icons': {
		icons: RadixIcons
	},
	'Remix Icons': {
		icons: RemixIcons
	},
	Octicons: {
		icons: Octicons,
		themes: ['default', '24', '12']
	},
	'css.gg Icons': {
		icons: CssGGIcons,
		urlName: 'css-gg-icons'
	},
	'Iconic Free Icons': {
		icons: IconicFreeIcons
	}
} as { [key: string]: { icons: any; themes?: string[]; urlName?: string } };

const createIconsStore = () => {
	const { subscribe, update } = writable({
		map
	});

	return {
		subscribe: subscribe
	};
};

export const icons = createIconsStore();

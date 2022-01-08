import { Component, createSignal, For } from 'solid-js'

import { Icon } from './solid-icon'
import * as HeroIcons from '@steeze-ui/heroicons'
import * as RadixIcons from '@steeze-ui/radix-icons'
import * as IconicFreeIcons from '@steeze-ui/iconic-free'
import * as Octicons from '@steeze-ui/octicons'
import * as FeatherIcons from '@steeze-ui/feather-icons'

const App: Component = () => {
	const [solidTheme, setSolidTheme] = createSignal(false)
	return (
		<div style="display:flex; flex-direction:column; gap:1rem">
			<div>
				<h1 style="color:white">Heroicons</h1>
				<div>
					<input
						id="heroicons-theme"
						type="checkbox"
						checked={solidTheme()}
						onChange={(e: any) => setSolidTheme(e.target.checked)}
					/>
					<label for="heroicons-theme">solid</label>
				</div>
				<div style="display:flex;gap:2rem; flex-wrap:wrap">
					<For each={Object.keys(HeroIcons)}>
						{(key) => (
							<Icon src={HeroIcons[key]} theme={solidTheme() ? 'solid' : 'default'} size="1.5rem" />
						)}
					</For>
				</div>
			</div>
			<div>
				<h1 style="color:white">Radix Icons</h1>
				<div style="display:flex;gap:2rem; flex-wrap:wrap">
					<For each={Object.keys(RadixIcons)}>
						{(key) => <Icon src={RadixIcons[key]} size="1.5rem" />}
					</For>
				</div>
			</div>
			<div>
				<h1 style="color:white">Iconic Free</h1>
				<div style="display:flex;gap:2rem; flex-wrap:wrap">
					<For each={Object.keys(IconicFreeIcons)}>
						{(key) => <Icon src={IconicFreeIcons[key]} size="1.5rem" />}
					</For>
				</div>
			</div>
			<div>
				<h1 style="color:white">Octicons</h1>
				<div style="display:flex;gap:2rem; flex-wrap:wrap">
					<For each={Object.keys(Octicons)}>
						{(key) => <Icon src={Octicons[key]} size="1.5rem" />}
					</For>
				</div>
			</div>
			<div>
				<h1 style="color:white">Feather Icons</h1>
				<div style="display:flex;gap:2rem; flex-wrap:wrap">
					<For each={Object.keys(FeatherIcons)}>
						{(key) => <Icon src={FeatherIcons[key]} size="1.5rem" />}
					</For>
				</div>
			</div>
		</div>
	)
}

export default App

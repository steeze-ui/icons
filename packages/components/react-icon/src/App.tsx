import { useState } from 'react'

import Icon from '.'
import * as HeroIcons from '@steeze-ui/heroicons'
import * as RadixIcons from '@steeze-ui/radix-icons'
import * as IconicFreeIcons from '@steeze-ui/iconic-free'
import * as Octicons from '@steeze-ui/octicons'
import * as FeatherIcons from '@steeze-ui/feather-icons'

function App() {
	const [solidTheme, setSolidTheme] = useState(false)

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
			<div>
				<h1 style={{ color: 'white' }}>Heroicons</h1>
				<div>
					<input
						id="heroicons-theme"
						type="checkbox"
						checked={solidTheme}
						onChange={(e: any) => setSolidTheme(e.target.checked)}
					/>
					<label htmlFor="heroicons-theme">solid</label>
				</div>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
					{Object.keys(HeroIcons).map((key: string) => (
						<Icon src={HeroIcons[key]} theme={solidTheme ? 'solid' : 'default'} size="1.5rem" />
					))}
				</div>
			</div>
			<div>
				<h1 style={{ color: 'white' }}>Radix Icons</h1>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
					{Object.keys(RadixIcons).map((key: string) => {
						;<Icon src={RadixIcons[key]} theme={solidTheme ? 'solid' : 'default'} size="1.5rem" />
					})}
				</div>
			</div>
			<div>
				<h1 style={{ color: 'white' }}>Iconic Free</h1>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
					{Object.keys(IconicFreeIcons).map((key: string) => (
						<Icon
							src={IconicFreeIcons[key]}
							theme={solidTheme ? 'solid' : 'default'}
							size="1.5rem"
						/>
					))}
				</div>
			</div>
			<div>
				<h1 style={{ color: 'white' }}>Octicons</h1>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
					{Object.keys(Octicons).map((key: string) => (
						<Icon src={Octicons[key]} theme={solidTheme ? 'solid' : 'default'} size="1.5rem" />
					))}
				</div>
			</div>
			<div>
				<h1 style={{ color: 'white' }}>Feather Icons</h1>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
					{Object.keys(FeatherIcons).map((key: string) => (
						<Icon src={FeatherIcons[key]} theme={solidTheme ? 'solid' : 'default'} size="1.5rem" />
					))}
				</div>
			</div>
		</div>
	)
}

export default App

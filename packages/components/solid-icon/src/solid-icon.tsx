import { For, mergeProps, Show, splitProps } from 'solid-js'

export type IconSource = { default: IconThemeSource } & { [theme: string]: IconThemeSource }

interface IconProps {
	src: IconSource
	theme?: string
	size?: string
	[key: string]: any
}

type AllowedTags = 'path' | 'circle' | 'rect' | 'polygon' | 'polyline' | 'line'
type IconThemeSource = {
	a: { [attribute: string]: string }
} & {
	[tag in AllowedTags]?: { [attribute: string]: string }[]
}

export function Icon(props: IconProps) {
	const merged = mergeProps({ theme: 'default', size: '100%' }, props)
	const [local, others] = splitProps(merged, ['src', 'theme', 'size'])

	return (
		<Show when={local.src[local.theme]}>
			<svg
				{...local.src[local.theme].a}
				xmlns="http://www.w3.org/2000/svg"
				width={local.size}
				height={local.size}
				{...others}
			>
				<For each={local.src[local.theme]?.path}>{(a) => <path {...a} />}</For>
				<For each={local.src[local.theme]?.rect}>{(a) => <rect {...a} />}</For>
				<For each={local.src[local.theme]?.circle}>{(a) => <circle {...a} />}</For>
				<For each={local.src[local.theme]?.polyline}>{(a) => <polyline {...a} />}</For>
				<For each={local.src[local.theme]?.polygon}>{(a) => <polygon {...a} />}</For>
				<For each={local.src[local.theme]?.line}>{(a) => <line {...a} />}</For>
			</svg>
		</Show>
	)
}

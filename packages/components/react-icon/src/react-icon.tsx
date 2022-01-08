import { forwardRef } from 'react'

interface IconProps {
	src: IconSource
	theme?: string
	size?: string
	[key: string]: any
}

export interface IconSource {
	default: any
	[key: string]: any
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
	({ src, size = '100%', theme = 'default', ...rest }: IconProps, forwardedRef) => {
		if (src[theme]) {
			return (
				<svg
					{...src[theme].a}
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					{...rest}
					ref={forwardedRef}
				>
					{src[theme]?.path?.map((a) => (
						<path {...a}></path>
					))}
					{src[theme]?.rect?.map((a) => (
						<rect {...a}></rect>
					))}
					{src[theme]?.circle?.map((a) => (
						<circle {...a}></circle>
					))}
					{src[theme]?.polyline?.map((a) => (
						<polyline {...a}></polyline>
					))}
					{src[theme]?.polygon?.map((a) => (
						<polygon {...a}></polygon>
					))}
					{src[theme]?.line?.map((a) => (
						<line {...a}></line>
					))}
				</svg>
			)
		} else {
			return <></>
		}
	}
)

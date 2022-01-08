declare module 'pascalcase' {
	export default function pascalcase(str: string): string
}

declare module 'html-parse-stringify' {
	export function parse(str: string): string
	export function stringify(str: string): string
}

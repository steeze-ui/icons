export interface IconSource {
	default: IconSourceThemeAttrs
	[key: string]: IconSourceThemeAttrs
}

interface IconSourceThemeAttrs {
	a?: {
		[key: string]: string
	}
	path?: {
		[key: string]: string
	}[]
	rect?: {
		[key: string]: string
	}[]
	circle?: {
		[key: string]: string
	}[]
}

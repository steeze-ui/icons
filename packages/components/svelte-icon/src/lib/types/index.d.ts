export interface IconSource {
	default: IconSourceThemeAttrs
	[key: string]: IconSourceThemeAttrs
}

interface IconSourceThemeAttrs {
	a?: {
		[key: string]: string
	}
	[key: string]: {
		[key: string]: string
	}[]
}

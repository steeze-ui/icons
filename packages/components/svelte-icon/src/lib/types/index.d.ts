export interface IconSource {
	default: {
		a: {
			[key: string]: string
		}
		p: {
			[key: string]: string
		}[]
	}
	[key: string]: {
		a: {
			[key: string]: string
		}
		p: {
			[key: string]: string
		}[]
	}
}

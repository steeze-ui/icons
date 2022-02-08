export function kebabcase(str: string) {
	return str.replace(/(?!^)([A-Z\u00C0-\u00D6])/g, function (match) {
		return '-' + match.toLowerCase()
	})
}

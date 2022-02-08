var wordSeparators = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/

export function pascalcase(str: string) {
	var words = str.split(wordSeparators)
	var len = words.length
	var mappedWords = new Array(len)
	for (var i = 0; i < len; i++) {
		var word = words[i]
		if (word === '') {
			continue
		}
		mappedWords[i] = word[0].toUpperCase() + word.slice(1)
	}
	return mappedWords.join('')
}

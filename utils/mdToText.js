import stringReplaceAll from 'string-replace-all';

let mdToText = (text) => {
	let markdownReservedWords = ['**', '#', '_', '>'];
	for (const letter of markdownReservedWords) {
		text = stringReplaceAll(text, letter, '');
	}
	return text;
};

export { mdToText };

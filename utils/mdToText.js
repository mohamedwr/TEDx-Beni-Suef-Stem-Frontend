let mdToText = (text) => {
	let markdownReservedWords = ['**', '#', '_', '>'];
	for (const letter of markdownReservedWords) {
		text = text.replaceAll(letter, '');
	}
	return text;
};

export { mdToText };

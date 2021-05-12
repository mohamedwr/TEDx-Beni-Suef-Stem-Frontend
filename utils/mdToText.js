import stringReplaceAll from "string-replace-all";

const mdToText = (text) => {
	const markdownReservedWords = ["**", "#", "_", ">"];
	for (const letter of markdownReservedWords) {
		text = stringReplaceAll(text, letter, "");
	}
	return text;
};

export { mdToText };

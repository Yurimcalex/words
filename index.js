let words = { 
	...verbs,
	...nouns,
	...adjectives,
	...adverb,
	...prepositions,
	...pronouns };

let counter = document.querySelector('.counter');
counter.innerHTML = `words amount: ${Object.keys(words).length}`;

search.oninput = function (e) {
	let input = e.target.value;
	if (input in words) {
		data.innerHTML = `${input}: ${words[input]}`;
	} else {
		data.innerHTML = '';
	}
}
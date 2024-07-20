// let words = { 
// 	...verbs,
// 	...nouns,
// 	...adjectives,
// 	...adverb,
// 	...prepositions,
// 	...pronouns };


const words = {
	verb: verbs,
	noun: nouns,
	adjective: adjectives,
	adverb: adverb,
	preposition: prepositions,
	pronoun: pronouns
};


let counter = document.querySelector('.counter');
counter.innerHTML = `words amount: ${getWordCount(words)}`;

search.oninput = function (e) {
	// let input = e.target.value;
	// if (input in words) {
	// 	data.innerHTML = `${input}: ${words[input]}`;
	// } else {
	// 	data.innerHTML = '';
	// }
}


function getWordCount(words) {
	let result = 0;
	for (let part in words) {
		result += Object.keys(words[part]).length;
	}
	return result;
}
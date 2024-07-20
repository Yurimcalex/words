

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

document.getElementById('search').oninput = function (e) {
	const input = e.target.value.trim();
	const match = search(input, words);
	console.log(match);
}




function getWordCount(words) {
	let result = 0;
	for (let part in words) {
		result += Object.keys(words[part]).length;
	}
	return result;
}


function search(word, words) {
	const result = {};
	for (let part in words) {
		const match = []
		const data = words[part];
		for (let w in data) {
			if (w === word) {
				match.push([word, data[w]])
			}
		}
		if (match.length) result[part] = match;
	}
	return result;
}
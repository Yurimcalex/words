const words = {
	verb: verbs,
	noun: nouns,
	adjective: adjectives,
	adverb: adverb,
	preposition: prepositions,
	pronoun: pronouns
};


let counter = document.querySelector('.page-1_counter');
counter.innerHTML = `words amount: ${getWordCount(words)}`;


document.getElementById('search').oninput = function (e) {
	const input = e.target.value.trim();
	const match = search(input, words);
	data.textContent = makeResultStr(match);
};


const navMenu = document.querySelector('.nav-menu');
let prevPage = null;
navMenu.addEventListener('click', (e) => {
	const target = e.target;
	if (target.tagName === 'LI') {
		const pageId = target.dataset.nav;
		const page = document.getElementById(pageId);
		if (page.classList.contains('hide-page')) {
			page.classList.remove('hide-page');
		}
		if (prevPage) {
			prevPage.classList.add('hide-page');
		}
		prevPage = page;
	}
});


function makeResultStr(match) {
	let str = '';
	for (let m in match) {
		const wds = match[m];
		str += m + ':' + '\n  ';

		for (let i = 0; i < wds.length; i += 1) {
			str += wds[i].join(' - ');
			str += '\n';
			if (i !== wds.length - 1) str += '  '; 
		}

		str += '\n';
	}
	return str;
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
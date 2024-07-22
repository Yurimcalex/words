const words = {
	common,
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
let prevPage = document.getElementById('page-1');
navMenu.addEventListener('click', (e) => {
	const target = e.target;
	if (target.tagName === 'LI') {
		const pageId = target.dataset.nav;
		const page = document.getElementById(pageId);
		if (prevPage === page) return;
		if (page.classList.contains('hide-page')) {
			page.classList.remove('hide-page');
		}
		if (prevPage) {
			prevPage.classList.add('hide-page');
		}
		prevPage = page;
	}
});

navMenu.addEventListener('click', (e) => {
	const target = e.target;
	if (target.tagName === 'LI') {
		target.classList.add('item_selected');
		const lis = navMenu.children;
		for (let i = 0; i < lis.length; i += 1) {
			if (lis[i] === target) continue;
			lis[i].classList.remove('item_selected');
		}
	}
});


const getWordsBtn = document.getElementById('analize');
const analizedTextArea = document.getElementById('analize-text');
const analizedResultCont = document.getElementById('analize-result');
getWordsBtn.addEventListener('click', () => {
	const text = analizedTextArea.value;
	const wordsFromInput = getWords(text);
	console.log(wordsFromInput);
	const newWords = analizeWords(wordsFromInput, words);
	const wordsToSave = getUniqueElems(newWords);

	//analizedResultCont.textContent = wordsToSave.join(', ');
	//console.log(wordsFromInput, newWords, wordsToSave);
	analizedResultCont.innerHTML = highlight_str(wordsFromInput, wordsToSave);
});


function highlight_str(wordsFromInput, findedWords) {
	return wordsFromInput.map(word => {
		if (findedWords.includes(word)) {
			return `<em style="color:red;">${word}</em>`
		}
		return word;
	}).join(' ');
}


function getUniqueElems(elems) {
	return Array.from(new Set(elems));
}


function getWords(text) {
	const result = [];
	const words = text.split(' ');
	words.forEach(word => {
		if (word => word.includes('\n')) {
			result.push(...word.split('\n'));
		} else {
			result.push(word);
		}
	});
	return result;
}


function analizeWords(wordsFromInput, words) {
	let result = [];
	wordsFromInput.forEach(word => {
		if (isNewWord(word, words)) {
			result.push(word);
		}
	});
	return result;
}


function isNewWord(word, words) {
	for (let part in words) {
		for (let w in words[part]) {
			if (w === word) {
				return false;
			}
		}
	}
	return true;
}


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
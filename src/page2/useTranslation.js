import { useReducer } from 'react';
import { db } from '../db/db.js';


const initialState = {
	text: '',
	textTranslation: '',
	newWords: [],
	word: '',
	wordTranslation: '',
	loading: false
};


export default function useTransition() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return [state, dispatch];
}


function reducer(state, action) {
	switch(action.type) {
		case 'text_changed':
			return { ...initialState, text: action.text };

		case 'translation_fetched':
			return { ...state, textTranslation: action.translation };

		case 'newWords_found':
			return { 
				...state,
				newWords: action.words
		};

		case 'word_picked':
			return { 
				...state,
				word: action.word,
				wordTranslation: action.translation,
			};

		case 'fetch_started':
			return { ...state, loading: true };

		case 'fetch_done':
			return { ...state, loading: false };

		default:
			return state;
	}
}


export const changeText = (text, dispatch) => dispatch({ type: 'text_changed', text });


const textStore = {};
export const fetchTranslation = async (text, dispatch) => {
	let translation;
	if (text in textStore) {
		translation = textStore[text];
	} else {
		dispatch({ type: 'fetch_started' });
		translation = await getTranslation(text);
		// await new Promise((resolve) => {
		// 	setTimeout(() => resolve(), 2000);
		// });
		dispatch({ type: 'fetch_done' });
		textStore[text] = translation;
	}
	
	dispatch({
	 	type: 'translation_fetched',
	 	translation
	});
	dispatch({
		type: 'newWords_found',
		words: getNewWords(text)
	});
};


const wordsStore = {};
export const pickWord = async (word, dispatch) => {
	let translation;
	if (word in wordsStore) {
		translation = wordsStore[word];
	} else {
		translation = await getTranslation(word);
		wordsStore[word] = translation;
	}
	dispatch({
		type: 'word_picked',
		word,
		translation
	});
};


async function getTranslation(text) {
	const sourceLang = 'en';
	const targetLang = 'ru';

	const requests = text
		.split('. ')
		.map(part => fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + 
			sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(part)));
	
	const responses = await Promise.all(requests);
	const translations = await Promise.all(responses.map(responce => responce.json()));

	return translations.map(data => data[0][0][0]).join(' ');
}


function getNewWords(text) {
	const parts = text
		.split('.').join(' . ')
		.split(',').join(' , ')
		.split('\n').join(' ')
		.split(' ').filter(word => !!word);

	const words = parts
		.filter(part => part.length > 1)
		.map(word => word.toLowerCase());

	const newWords = db.getNewWords(words);
	return Array.from(new Set(newWords));
}


const testStr = `
	This question is a few years old.
	However, I'd just like to drop in my 2 cents regarding the modern use of this.
	There is an increasing trend in the use of client-side templates,
	and generally the way to define templates outside of javascript is to embed the templates within
	a <script> tag (John Resig Microtemplating) to avoid escaping.
	However, this means that templates are not cached, and they have to be rendered along side content.
	A workaround could be to put the templates in a separate file, and use "script" tag to link to it,
	but you cannot get the contents of the file without AJAX.
`;

function getWords(text) {
	const result = [];
	let word = '';

	for (let i = 0; i < text.length; i += 1) {
		const char = text[i];
		const nextChar = text[i + 1];

		if (isLetter(char)) {
			word += char;
		} else if (isRelateToWord(char)) {
			word += char;
		} else {
			if (word) result.push(word);
			word = '';
		}
	}

	return result;

	function isRelateToWord(char, nextChar) {
		const chars = ["'", '-'];
		if (chars.includes(char) && nextChar !== ' ') return true;
		return false;
	}

	function isLetter(char) {
		const code = char.codePointAt(0)
		if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) return true;
		return false;
	}
}

getWords(testStr);

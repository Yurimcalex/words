import { useReducer } from 'react';
import { db } from '../db/db.js';


const initialState = {
	text: '',
	textTranslation: '',
	newWords: {},
	word: ''
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
				newWords: action.words.reduce((acc, w) => {
					acc[w] = '';
					return acc;
				}, {}) 
		};

		case 'word_picked':
			const words = { ...state.newWords };
			words[action.word] = action.translation;
			return { 
				...state,
				word: action.word,
				newWords: words
			};

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
		translation = await getTranslation(text);
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
	const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + 
		sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(text);

	const responce = await fetch(url);
	const data = await responce.json();
	return data[0][0][0];
}


function getNewWords(translation) {
	const parts = translation
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
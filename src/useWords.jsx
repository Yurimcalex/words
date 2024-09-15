import { useState } from 'react';
import { db } from './db/db.js';


const initialState = {
	words: [],
	newWords: []
};


export default function useWords() {
	const [data, setData] = useState(initialState);

	const getWordsInfo = (text) => {
		const textParts = divideIntoParts(text);
		const words = getWords(textParts);
		const newWords = getNewWords(words);
		setData({ words, newWords });
	};

	return [data, getWordsInfo];
}


function divideIntoParts(text) {
	return text
		.split('.').join(' . ')
		.split(',').join(' , ')
		.split('\n').join(' ')
		.split(' ').filter(word => !!word);
}

function getWords(parts) {
	return parts.filter(part => part.length > 1);
}

function eliminateRepeat(words) {
	return Array.from(new Set(words));
}

function getNewWords(words) {
	const wordsLC = words.map(word => word.toLowerCase());
	return eliminateRepeat( db.getNewWords(wordsLC) );
}
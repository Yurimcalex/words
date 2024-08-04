import { useState } from 'react';
import useTranslate from './useTranslate.jsx';

export default function useWord() {
	const [word, setWord] = useState('');
	const [translation, setTranslation] = useTranslate();

	const highlight = (word) => {
		setWord(word);
		if (word) setTranslation(word);
	};

	return [{word, translation}, highlight];
}
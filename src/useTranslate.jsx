import { useState } from 'react';

export default function useTranslate() {
	const [text, setText] = useState('');

	const translate = (txt) => {
		const sourceText = txt;
		const sourceLang = 'en';
		const targetLang = 'ru';
		const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + 
			sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);

		fetch(url).then(resp => resp.json()).then(data => setText(data[0][0][0]));
	};

	return [text, translate];
}
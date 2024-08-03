import { useState } from 'react';
import UserText from './UserText.jsx';
import TextTranslate from './TextTranslate.jsx';
import WordsResult from './WordsResult.jsx';
import WordButtons from './WordButtons.jsx';
import { db } from '../db/db.js';
import useTranslate from '../useTranslate.jsx';


export default function Page2({ theme }) {
	const [text, setText] = useState('');
	const [parts, setParts] = useState([]);
	const [newWords, setNewWords] = useState([]);
	const [highlightWord, setHighlightWord] = useState('');

	const [showTextTranslate, setShowTextTranslate] = useState(false);
	const [translate, setTranslate] = useTranslate();

	const handleClick = () => {
		const parts = divideIntoParts(text);
		const words = getWords(parts);
		const newWords = eliminateRepeat(db.getNewWords(words.map(toLowerCase)));
		setParts(parts);
		setNewWords(newWords);

		setShowTextTranslate(true);
		setTranslate(prepareToTranslate(text));
	};

	return (
		<div className="new-words">
			{showTextTranslate
				? (
						<TextTranslate
							text={translate}
							theme={theme}
							onBtnClick={() => {
								setShowTextTranslate(false);
								setParts([]);
								setNewWords([]);
								setHighlightWord('');
							}}
						/>
					)

				: (
						<UserText 
							text={text}
							onTextChange={(e) => setText(e.target.value)}
							onBtnClick={handleClick}
							theme={theme}
						/>
					)}

			<WordsResult 
				textParts={parts}
				newWords={newWords}
				highlightedWord={highlightWord}
				theme={theme}
			/>

			<WordButtons 
				words={newWords}
				onBtnClick={setHighlightWord}
				highlightedWord={highlightWord}
				theme={theme}
			/>
		</div>
	);
}


function divideIntoParts(textInput) {
	return textInput
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

function toLowerCase(word) {
	return word[0].toLowerCase() + word.slice(1);
}

function prepareToTranslate(text) {
	return text.split('.').join(' - ');
}
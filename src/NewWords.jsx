import { useState } from 'react';
import { db } from './db/db.js';


export default function NewWords() {
	const [text, setText] = useState('');
	const [parts, setParts] = useState([]);
	const [newWords, setNewWords] = useState([]);
	const [highlightWord, setHighlightWord] = useState('');

	const handleClick = () => {
		const parts = divideIntoParts(text);
		const words = getWords(parts);
		const newWords = eliminateRepeat(db.getNewWords(words.map(toLowerCase)));
		setParts(parts);
		setNewWords(newWords);
	};

	return (
		<div className="new-words">
			<div className="new-words_input">
				<textarea
					placeholder="Put text here and get words you don't have in database."
					className="dark-2"
					value={text}
					onChange={(e) => setText(e.target.value)}
				></textarea>
				<div className="dark-btn">
					<button className="dark-btn" onClick={handleClick}>Get words</button>
				</div>
			</div>
			
			<div className="new-words_result dark-dim">
				{parts.map(part => {
					if (newWords.includes(part.toLowerCase())) {
						return (
							<><em className={highlightWord === part.toLowerCase() ? 'dark-highlight' : 'dark-select'}>{part}</em>{' '}</>
						);
					}
					return part + ' ';
				})}
			</div>
			
			<div className="new-words_counter">
				<div>New words count: {newWords.length}</div>
				<div>
					{newWords.map(word => <button className="dark-btn" onClick={() => setHighlightWord(word)}>{word}</button>)}
				</div>
			</div>
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
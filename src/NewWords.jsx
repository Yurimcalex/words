import { useState } from 'react';
import { db } from './db/db.js';


export default function NewWords() {
	const [text, setText] = useState('');
	const [parts, setParts] = useState([]);
	const [newWords, setNewWords] = useState([]);

	const handleClick = () => {
		const parts = divideIntoParts(text);
		const words = getWords(parts);
		const newWords = eliminateRepeat(db.getNewWords(words.map(toLowerCase)));
		setParts(parts);
		setNewWords(newWords);
	};

	return (
		<div className="new-words">
			<div>
				<textarea
					value={text}
					onChange={(e) => setText(e.target.value)}
				></textarea>
				
				<button onClick={handleClick}>Get words</button>
			</div>
			
			<div className="new-words_result">
				{parts.map(part => {
					if (newWords.includes(part.toLowerCase())) {
						return <><em style={{color: 'green'}}>{part}</em>{' '}</>;
					}
					return part + ' ';
				})}
			</div>
			
			<div className="new-words_counter">
				<div>New words count: {newWords.length}</div>
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
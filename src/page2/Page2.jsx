import { useState } from 'react';
import UserText from './UserText.jsx';
import { db } from '../db/db.js';


export default function Page2() {
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
			<UserText 
				text={text}
				onTextChange={(e) => setText(e.target.value)}
				onBtnClick={handleClick}
			/>
	
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
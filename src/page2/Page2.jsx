import { useState } from 'react';
import UserText from './UserText.jsx';
import TextTranslate from './TextTranslate.jsx';
import WordsResult from './WordsResult.jsx';
import WordButtons from './WordButtons.jsx';
import useTranslate from '../useTranslate.jsx';
import useWords from '../useWords.jsx';
import useWord from '../useWord.jsx';

export default function Page2({ theme }) {
	const [text, setText] = useState('');
	const [{ textParts, words, newWords }, getInfo, resetInfo] = useWords();
	const [translation, setTranslation] = useTranslate();
	const [word, setWord] = useWord();

	const [showTranslation, setShowTranslation] = useState(false);
	
	const handleGetWords = () => {
		getInfo(text);
		setShowTranslation(true);
		setTranslation(text);
	};

	const handleGoBack = () => {
		resetInfo();
		setShowTranslation(false);
		setWord('');
	};


	return (
		<div className="new-words">
			{showTranslation
				? (
						<TextTranslate
							theme={theme}
							text={translation}
							word={word.translation}
							onBtnClick={handleGoBack}
						/>
					)

				: (
						<UserText
							theme={theme}
							text={text}
							onBtnClick={handleGetWords}
							onTextChange={(e) => setText(e.target.value)}
						/>
					)}

			<WordsResult
				theme={theme}
				textParts={textParts}
				newWords={newWords}
				highlightedWord={word.word}
			/>

			<WordButtons
				theme={theme}
				words={newWords}
				onBtnClick={setWord}
				word={word.word}
				translation={word.translation}
			/>
		</div>
	);
}
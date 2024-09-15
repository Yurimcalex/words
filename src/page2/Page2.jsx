import { useState } from 'react';
import UserText from './UserText.jsx';
import TextTranslate from './TextTranslate.jsx';
import WordsResult from './WordsResult.jsx';
import WordButtons from './WordButtons.jsx';
import useTranslate from '../useTranslate.jsx';
import useWords from '../useWords.jsx';
import useWord from '../useWord.jsx';

export default function Page2({ theme }) {
	const [textInput, setTextInput] = useState('');
	const [displayTranslation, setDisplayTranslation] = useState(false);

	const [{ textParts, words, newWords }, getInfo, resetInfo] = useWords();
	const [translation, setTranslation] = useTranslate();
	const [word, setWord] = useWord();

	
	
	const handleGetWords = () => {
		getInfo(textInput);
		setDisplayTranslation(true);
		setTranslation(textInput);
	};

	const handleGoBack = () => {
		resetInfo();
		setDisplayTranslation(false);
		setWord('');
	};


	return (
		<div className="new-words">
			{displayTranslation
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
							text={textInput}
							onBtnClick={handleGetWords}
							onTextChange={(e) => setTextInput(e.target.value)}
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
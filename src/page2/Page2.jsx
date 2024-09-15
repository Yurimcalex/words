import { useState } from 'react';
import UserTextInput from './UserTextInput.jsx';
import TranslatedText from './TranslatedText.jsx';
import HighlightedUserText from './HighlightedUserText.jsx';
import NewWordsButtons from './NewWordsButtons.jsx';
import useTranslate from '../useTranslate.jsx';
import useWords from '../useWords.jsx';
import useWord from '../useWord.jsx';

export default function Page2({ theme }) {
	const [enteredText, setEnteredText] = useState('');
	const [enteredTextTranslation, setEnteredTextTranslation] = useTranslate();
	const [displayTranslation, setDisplayTranslation] = useState(false);
	


	const [{ textParts, words, newWords }, getInfo, resetInfo] = useWords();
	console.log(textParts, 'textParts');
	console.log(words, 'words');
	console.log(newWords, 'newWords');
	
	const [word, setWord] = useWord();

	const handleTextInput = (e) => setEnteredText(e.target.value);
	
	
	const handleGetWords = () => {
		getInfo(enteredText);
		setEnteredTextTranslation(enteredText);
		setDisplayTranslation(true);
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
						<TranslatedText
							theme={theme}
							text={enteredTextTranslation}
							word={word.translation}
							onBtnClick={handleGoBack}
						/>
					)

				: (
						<UserTextInput
							theme={theme}
							text={enteredText}
							onTextChange={handleTextInput}
							onSubmit={handleGetWords}
						/>
					)}

			<HighlightedUserText
				theme={theme}
				textParts={textParts}
				newWords={newWords}
				highlightedWord={word.word}
			/>

			<NewWordsButtons
				theme={theme}
				words={newWords}
				onBtnClick={setWord}
				word={word.word}
				translation={word.translation}
			/>
		</div>
	);
}
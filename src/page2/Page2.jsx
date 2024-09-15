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
	const [{ words, newWords }, getWords, resetWords] = useWords();
	const [word, wordTranslation, selectWord] = useWord();


	const handleTextInput = (e) => setEnteredText(e.target.value);
		
	const handleGetWords = () => {
		setEnteredTextTranslation(enteredText);
		getWords(enteredText);
		setDisplayTranslation(true);
	};

	const handleGoBack = () => {
		setDisplayTranslation(false);
		resetWords();
		selectWord('');
	};


	return (
		<div className="new-words">
			{displayTranslation
				? (
						<TranslatedText
							theme={theme}
							text={enteredTextTranslation}
							word={wordTranslation}
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
				text={enteredText}
				words={newWords}
				word={word}
			/>

			<NewWordsButtons
				theme={theme}
				words={newWords}
				word={word}
				translation={wordTranslation}
				onBtnClick={selectWord}
			/>
		</div>
	);
}
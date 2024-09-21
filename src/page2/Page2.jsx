import { useState } from 'react';
import UserTextInput from './UserTextInput.jsx';
import TranslatedText from './TranslatedText.jsx';
import HighlightedUserText from './HighlightedUserText.jsx';
import NewWordsButtons from './NewWordsButtons.jsx';
import useTransition, { changeText, fetchTranslation, pickWord } from './useTranslation.js';


export default function Page2({ theme }) {
	const [isTranslationShowed, setIsTranslationShowed] = useState(false);
	const [{ text, textTranslation, newWords, word, wordTranslation }, dispatch] = useTransition();

	const words = isTranslationShowed && Object.keys(newWords) || [];


	const handleTextInput = (e) => changeText(e.target.value, dispatch);
		
	const handleGetWords = () => {
		fetchTranslation(text, dispatch);
		setIsTranslationShowed(true);
	};

	const handleGoBack = () => setIsTranslationShowed(false);


	return (
		<div className="new-words">
			{isTranslationShowed
				? (
						<TranslatedText
							theme={theme}
							text={textTranslation}
							word={wordTranslation}
							onBtnClick={handleGoBack}
						/>
					)

				: (
						<UserTextInput
							theme={theme}
							text={text}
							onTextChange={handleTextInput}
							onSubmit={handleGetWords}
						/>
					)}

			<HighlightedUserText
				theme={theme}
				text={text}
				words={words}
				word={word}
			/>

			<NewWordsButtons
				theme={theme}
				words={words}
				word={word}
				translation={wordTranslation}
				onBtnClick={(word) => pickWord(word, dispatch)}
			/>
		</div>
	);
}
import { useState } from 'react';
import UserTextInput from './UserTextInput.jsx';
import TranslatedText from './TranslatedText.jsx';
import HighlightedUserText from './HighlightedUserText.jsx';
import NewWordsButtons from './NewWordsButtons.jsx';
import useTransition, { changeText, fetchTranslation, pickWord } from './useTranslation.js';


export default function Page2({ theme }) {
	const [isTranslationShowed, setIsTranslationShowed] = useState(false);
	const [state, dispatch] = useTransition();

	const handleTextInput = (e) => changeText(e.target.value, dispatch);
		
	const handleGetWords = () => {
		fetchTranslation(state.text, dispatch);
		setIsTranslationShowed(true);
	};

	const handleGoBack = () => setIsTranslationShowed(false);

	return (
		<div className="new-words">
			{isTranslationShowed
				? (
						<TranslatedText
							theme={theme}
							text={state.textTranslation}
							word={state.newWords[state.word]}
							onBtnClick={handleGoBack}
						/>
					)

				: (
						<UserTextInput
							theme={theme}
							text={state.text}
							onTextChange={handleTextInput}
							onSubmit={handleGetWords}
						/>
					)}

			<HighlightedUserText
				theme={theme}
				text={state.text}
				words={isTranslationShowed && Object.keys(state.newWords) || []}
				word={state.word}
			/>

			<NewWordsButtons
				theme={theme}
				words={isTranslationShowed && Object.keys(state.newWords) || []}
				word={state.word}
				translation={state.newWords[state.word]}
				onBtnClick={(word) => pickWord(word, dispatch)}
			/>
		</div>
	);
}
import { useState } from 'react';
import UserTextInput from './UserTextInput.jsx';
import TranslatedText from './TranslatedText.jsx';
import HighlightedUserText from './HighlightedUserText.jsx';
import NewWordsButtons from './NewWordsButtons.jsx';
import useTransition, { changeText, fetchTranslation, pickWord } from './useTranslation.js';


export default function Page2({ theme }) {
	const [displayTranslation, setDisplayTranslation] = useState(false);
	const [state, dispatch] = useTransition();

	const handleTextInput = (e) => changeText(e.target.value, dispatch);
		
	const handleGetWords = () => {
		fetchTranslation(state.text, dispatch);
		setDisplayTranslation(true);
	};

	const handleGoBack = () => setDisplayTranslation(false);

	return (
		<div className="new-words">
			{displayTranslation
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
				words={displayTranslation && Object.keys(state.newWords) || []}
				word={state.word}
			/>

			<NewWordsButtons
				theme={theme}
				words={Object.keys(state.newWords)}
				word={state.word}
				translation={state.newWords[state.word]}
				onBtnClick={(word) => pickWord(word, dispatch)}
			/>
		</div>
	);
}
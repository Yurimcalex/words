import { useState } from 'react';
import UserText from './UserText.jsx';
import TextTranslate from './TextTranslate.jsx';
import WordsResult from './WordsResult.jsx';
import WordButtons from './WordButtons.jsx';
import useTranslate from '../useTranslate.jsx';
import useWords from '../useWords.jsx';


export default function Page2({ theme }) {
	const [text, setText] = useState('');
	const [{ textParts, words, newWords }, getInfo, resetInfo] = useWords();
	const [translate, setTranslate] = useTranslate();

	const [highlightedWord, setHighlightedWord] = useState('');
	const [showTranslate, setShowTranslate] = useState(false);
	

	const handleGetWords = () => {
		getInfo(text);
		setShowTranslate(true);
		setTranslate(text);
	};

	const handleGoBack = () => {
		resetInfo();
		setShowTranslate(false);
		setHighlightedWord('');
	};


	return (
		<div className="new-words">
			{showTranslate
				? (
						<TextTranslate
							theme={theme}
							text={translate}
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
				highlightedWord={highlightedWord}
			/>

			<WordButtons
				theme={theme}
				words={newWords}
				onBtnClick={setHighlightedWord}
				highlightedWord={highlightedWord}
			/>
		</div>
	);
}
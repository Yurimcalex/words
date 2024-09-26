import { Fragment } from 'react';
import { getParts } from './useTranslation.js';

export default function HighlightedUserText({ text, words, word, theme }) {
 	return (
 		<div className={`words-result ${theme}-dim lh-bgr`}>
 			{words.length > 0 && getParts(text)
 				.map((part, ind) => {
 					const lcPart = part.toLowerCase();
 					
 					if (lcPart === word) {
 						return <span key={part + ind} className={`${theme}-highlight roboto-med-i`}>{word}</span>
 					
 					} else if (words.includes(lcPart)) {
 						return <span key={part + ind} className={`${theme}-select`}>{part}</span>
 					
 					} else {
 						return <Fragment key={part + ind}>{part}</Fragment>;
 					}

 				})}
 		</div>
 	);
}
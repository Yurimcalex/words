export default function HighlightedUserText({ text, words, word, theme }) {
	return (
		<div className={`words-result ${theme}-dim lh-bgr`}>
			{words.length > 0 && text
				.split(' ')
				.map((part, ind) => {
					const match = matchWords(part, words);
					if (match.length) {
						return (
							<>
								<span
								  key={part + ind}
									className={match[0].toLowerCase() === word 
										? `${theme}-highlight roboto-med-i` 
										: `${theme}-select`}
								>
									{match[0]}
								</span>
								{match[1]} {' '}
							</>
						);
					} else {
						return part + ' ';
					}
				})}
		</div>
	);
}


function matchWords(part, words) {
	for (let i = 0; i < words.length; i += 1) {
		const word = words[i];
		const len = word.length;
		if (part.toLowerCase().includes(word)) {
			return [part.slice(0, len), part.slice(len)];
		}
	}
	return [];
}
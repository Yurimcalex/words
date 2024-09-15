export default function HighlightedUserText({ textParts, newWords, highlightedWord, theme }) {
	return (
		<div className={`words-result ${theme}-dim lh-bgr`}>
			{textParts.map(part => {
				if (newWords.includes(part.toLowerCase())) {
					return (
						<>
							<span
							  key={part}
								className={part.toLowerCase() === highlightedWord 
									? `${theme}-highlight roboto-med-i` 
									: `${theme}-select`}
							>
								{part}
							</span>
							{' '}
						</>
					)
				}

				return part + ' ';
			})}
		</div>
	);
}
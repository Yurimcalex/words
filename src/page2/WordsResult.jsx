export default function WordsResult({ textParts, newWords, highlightedWord }) {
	return (
		<div className="words-result dark-dim">
			{textParts.map(part => {
				if (newWords.includes(part.toLowerCase())) {
					return (
						<>
							<em
								className={part.toLowerCase() === highlightedWord 
									? 'dark-highlight' 
									: 'dark-select'}
							>
								{part}
							</em>
							{' '}
						</>
					)
				}

				return part + ' ';
			})}
		</div>
	);
}
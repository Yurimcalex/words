export default function WordsResult({ textParts, newWords, highlightedWord }) {
	return (
		<div className="words-result dark-dim roboto-lt fz-bgr lh-bgr">
			{textParts.map(part => {
				if (newWords.includes(part.toLowerCase())) {
					return (
						<>
							<em
							  key={part}
								className={part.toLowerCase() === highlightedWord 
									? 'dark-highlight roboto-med-i' 
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
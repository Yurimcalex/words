export default function WordsResult({ textParts, newWords, highlightedWord }) {
	return (
		<div className="words-result dark-dim light-dim roboto-lt fz-bgr lh-bgr">
			{textParts.map(part => {
				if (newWords.includes(part.toLowerCase())) {
					return (
						<>
							<em
							  key={part}
								className={part.toLowerCase() === highlightedWord 
									? 'dark-highlight light-highlight roboto-med-i' 
									: 'dark-select light-select'}
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
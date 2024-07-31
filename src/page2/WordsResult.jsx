import useTheme from '../useTheme.js';

export default function WordsResult({ textParts, newWords, highlightedWord }) {
	const [theme] = useTheme();

	return (
		<div className={`words-result ${theme}-dim roboto-lt fz-bgr lh-bgr`}>
			{textParts.map(part => {
				if (newWords.includes(part.toLowerCase())) {
					return (
						<>
							<em
							  key={part}
								className={part.toLowerCase() === highlightedWord 
									? `${theme}-highlight roboto-med-i` 
									: `${theme}-select`}
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
export default function TranslatedText({ theme, text, word, onBtnClick }) {
	return (
		<div className="text-translate">
			<div 
				className={`${theme}-2 roboto-lt lh-bgr`}
			>
				{word && splitByWord(text, word).map(part => {
					if (part.toLowerCase() === word) {
						return <span className={`${theme}-highlight roboto-med-i`}>{part}</span>
					} else {
						return part;
					}
				})}

				{!word && text}
			</div>

			<button 
				className={`${theme}-btn`}
				onClick={onBtnClick}
			>
				Go Back!
			</button>			
		</div>
	);
}


function splitByWord(textTranslation, word) {
	const text = textTranslation.toLowerCase();
	const result = [];

	let ind = -1, start = 0;
	while (true) {
		ind = text.indexOf(word, start);
		if (ind === -1) break;
		if (start !== ind) result.push(textTranslation.slice(start, ind));
		result.push(textTranslation.slice(ind, ind + word.length));
		start = ind + word.length;
	}

	if (start < text.length) result.push(textTranslation.slice(start));

	return result;
}
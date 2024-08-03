export default function WordButtons({ words, onBtnClick, highlightedWord, theme }) {
	return (
		<div className="word-buttons">
			<div className={`${theme}-dim fz-sm`}>
				New words count: <span className={`${theme}-select roboto-med`}>{words.length}</span>
			</div>

			<div>
				{words.map(word => (
					<button
						key={word}
						className={`${theme}-btn roboto-lt fz-smr`}
						onClick={() => {
							onBtnClick(word);
							translate(word);
						}}
					>
						<span className={highlightedWord === word ? `${theme}-highlight roboto-reg-i` : ''}>{word}</span>
					</button>
				))}
			</div>
		</div>
	);
}


function translate(word) {
	const sourceText = word;
	const sourceLang = 'en';
	const targetLang = 'ru';
	const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + 
		sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);

	fetch(url).then(resp => resp.json()).then(data => console.log(data[0][0]));
}
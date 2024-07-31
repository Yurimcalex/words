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
						onClick={() => onBtnClick(word)}
					>
						<span className={highlightedWord === word ? `${theme}-highlight roboto-reg-i` : ''}>{word}</span>
					</button>
				))}
			</div>
		</div>
	);
}
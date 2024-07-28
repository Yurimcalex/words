export default function WordButtons({ words, onBtnClick, highlightedWord }) {
	return (
		<div className="word-buttons">
			<div className="dark-dim fz-sm">
				New words count: <span className="dark-select roboto-med">{words.length}</span>
			</div>

			<div>
				{words.map(word => (
					<button
						key={word}
						className="dark-btn roboto-lt fz-smr"
						onClick={() => onBtnClick(word)}
					>
						<span className={highlightedWord === word ? 'dark-highlight roboto-reg-i' : ''}>{word}</span>
					</button>
				))}
			</div>
		</div>
	);
}
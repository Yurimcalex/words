export default function WordButtons({ words, onBtnClick, highlightedWord }) {
	return (
		<div className="word-buttons">
			<div className="dark-dim light-dim fz-sm">
				New words count: <span className="dark-select light-select roboto-med">{words.length}</span>
			</div>

			<div>
				{words.map(word => (
					<button
						key={word}
						className="dark-btn light-btn roboto-lt fz-smr"
						onClick={() => onBtnClick(word)}
					>
						<span className={highlightedWord === word ? 'dark-highlight light-highlight roboto-reg-i' : ''}>{word}</span>
					</button>
				))}
			</div>
		</div>
	);
}
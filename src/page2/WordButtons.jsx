export default function WordButtons({ words, onBtnClick, highlightedWord }) {
	return (
		<div className="word-buttons">
			<div className="dark-dim">
				New words count: <span className="dark-select roboto-med">{words.length}</span>
			</div>

			<div>
				{words.map(word => (
					<button 
						className="dark-btn roboto-lt"
						onClick={() => onBtnClick(word)}
					>
						<span className={highlightedWord === word ? 'dark-highlight roboto-reg-i' : ''}>{word}</span>
					</button>
				))}
			</div>
		</div>
	);
}
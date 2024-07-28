export default function WordButtons({ words, onBtnClick }) {
	return (
		<div className="word-buttons">
			<div className="dark-dim">
				New words count: <span className="dark-select">{words.length}</span>
			</div>

			<div>
				{words.map(word => (
					<button 
						className="dark-btn"
						onClick={() => onBtnClick(word)}
					>
						{word}
					</button>
				))}
			</div>
		</div>
	);
}
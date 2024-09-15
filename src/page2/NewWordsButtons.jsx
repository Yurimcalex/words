export default function NewWordsButtons({ words, onBtnClick, word, translation, theme }) {
	return (
		<div className="word-buttons">
			<div className={`${theme}-dim fz-sm`}>
				New words count: <span className={`${theme}-select roboto-med`}>{words.length}</span>
			</div>

			<div>
				{words.map(w => (
					<button
						key={w}
						className={`${theme}-btn roboto-lt fz-smr`}
						onClick={() => onBtnClick(w)}
					>

						{word === w
							? <span className={`${theme}-highlight roboto-reg-i`}>{w} - {translation}</span>
							: <span>{w}</span>}
					</button>
				))}
			</div>
		</div>
	);
}
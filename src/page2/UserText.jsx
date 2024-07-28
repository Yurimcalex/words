export default function UserText({ text, onTextChange, onBtnClick }) {
	return (
		<div className="user-text">
			<textarea
				placeholder="Put text here and get words you don't have in database."
				className="dark-2 fz-smr"
				value={text}
				onChange={onTextChange}
			>
			</textarea>

			<div className="dark-btn">
				<button 
					className="dark-btn"
					onClick={onBtnClick}
				>
					Get words
				</button>
			</div>
		</div>
	);
}
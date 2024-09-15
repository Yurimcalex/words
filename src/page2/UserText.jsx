export default function UserText({ text, onTextChange, onSubmit, theme }) {
	return (
		<div className="user-text">
			<textarea
				placeholder="Put text here and get words you don't have in database."
				className={`${theme}-2 fz-smr`}
				value={text}
				onChange={onTextChange}
			>
			</textarea>

			<div className={`${theme}-btn`}>
				<button 
					className={`${theme}-btn`}
					onClick={onSubmit}
				>
					Get words
				</button>
			</div>
		</div>
	);
}
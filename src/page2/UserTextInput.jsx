export default function UserTextInput({ text, isLoading, onTextChange, onSubmit, theme }) {
	return (
		<div className="user-text">
			<textarea
				placeholder="Put text here and get words you don't have in database."
				className={`${theme}-2 fz-smr`}
				value={isLoading ? '...wait for translation' : text}
				onChange={onTextChange}
			>
			</textarea>

			<div className={`${theme}-btn`}>
				<button 
					className={`${theme}-btn`}
					disabled={isLoading}
					onClick={onSubmit}
				>
					Get words
				</button>
			</div>
		</div>
	);
}
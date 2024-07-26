export default function NewWords() {
	return (
		<div className="new-words">
			<div>
				<textarea></textarea>
				<button>Get words</button>
			</div>
			
			<div className="new-words_result"></div>
			
			<div className="new-words_counter">
				<div>New words count: 0</div>
			</div>
		</div>
	);
}
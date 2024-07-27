export default function Search({ text, onChangeText }) {
	return (
		<div className="search dark-2">
			<input 
				className="dark-2"
				type="text"
				value={text}
				onInput={onChangeText}
			/>
		</div>
	);
}
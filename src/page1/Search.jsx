export default function Search({ text, onChangeText, theme }) {
	return (
		<div className={`search ${theme}-2`}>
			<input 
				className={`${theme}-2`}
				type="text"
				value={text}
				onInput={onChangeText}
			/>
			&#128270;
		</div>
	);
}
import useTheme from '../useTheme.js';

export default function Search({ text, onChangeText }) {
	const [theme] = useTheme();

	return (
		<div className={`search ${theme}-2`}>
			<input 
				className={`${theme}-2`}
				type="text"
				value={text}
				onInput={onChangeText}
			/>
		</div>
	);
}
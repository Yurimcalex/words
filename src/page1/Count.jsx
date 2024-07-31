import useTheme from '../useTheme.js';

export default function Count({ count }) {
	const [theme] = useTheme();

	return (
		<div className={`count ${theme}-dim fz-sm`}>
			words count: <span className={`${theme}-select roboto-med`}>{count}</span>
		</div>
	);
}
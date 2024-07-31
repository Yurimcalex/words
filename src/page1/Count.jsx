export default function Count({ count, theme }) {
	return (
		<div className={`count ${theme}-dim fz-sm`}>
			words count: <span className={`${theme}-select roboto-med`}>{count}</span>
		</div>
	);
}
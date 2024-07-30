export default function Count({ count }) {
	return (
		<div className="count dark-dim light-dim fz-sm">
			words count: <span className="dark-select light-select roboto-med">{count}</span>
		</div>
	);
}
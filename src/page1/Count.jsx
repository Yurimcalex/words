export default function Count({ count }) {
	return (
		<div className="count dark-dim fz-sm">
			words count: <span className="dark-select roboto-med">{count}</span>
		</div>
	);
}
export default function Count({ count }) {
	return (
		<div className="count dark-dim">
			words count: <span className="dark-select roboto-med">{count}</span>
		</div>
	);
}
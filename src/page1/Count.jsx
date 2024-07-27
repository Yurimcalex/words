export default function Count({ count }) {
	return (
		<div className="count dark-dim">
			words count: <span className="dark-select">{count}</span>
		</div>
	);
}
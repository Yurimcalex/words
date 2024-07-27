export default function SearchResult({ data }) {
	return (
		<div>
			{Object.keys(data).map(part => (
				<div key={part}>
					<div>{part}:</div>
					<div>
						{data[part].map(([origin, translation]) => (
							<div key={translation}>
								<span>{origin}</span> - <span>{translation}</span>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
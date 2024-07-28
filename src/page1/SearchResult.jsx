export default function SearchResult({ data }) {
	return (
		<div className="search-result">
			{Object.keys(data).map(part => (
				<div key={part} className="search-result_part">
					<div className="dark-dim">{part}:</div>
					
					<div>
						{data[part].map(([origin, translation]) => (
							<div key={translation}>
								<span className="dark-highlight">{origin}</span>
								{' - '} 
								<span>{translation}</span>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
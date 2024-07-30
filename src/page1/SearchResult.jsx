export default function SearchResult({ data }) {
	return (
		<div className="search-result">
			{Object.keys(data).map(part => (
				<div key={part} className="search-result_part">
					<div className="dark-dim light-dim roboto-lt">{part}:</div>
					
					<div>
						{data[part].map(([origin, translation]) => (
							<div key={translation}>
								<span className="dark-highlight light-highlight roboto-med fz-bgr">{origin}</span>
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
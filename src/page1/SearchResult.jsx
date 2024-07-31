import useTheme from '../useTheme.js';

export default function SearchResult({ data }) {
	const [theme] = useTheme();

	return (
		<div className="search-result">
			{Object.keys(data).map(part => (
				<div key={part} className="search-result_part">
					<div className={`${theme}-dim roboto-lt`}>{part}:</div>
					
					<div>
						{data[part].map(([origin, translation]) => (
							<div key={translation}>
								<span className={`${theme}-highlight roboto-med fz-bgr`}>{origin}</span>
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
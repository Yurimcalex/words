export default function SearchResult({ data }) {
	return (
		<div>
			<pre>{makeResultStr(data)}</pre>
		</div>
	);
}


function makeResultStr(match) {
	console.log(match);
	let str = '';
	for (let m in match) {
		const wds = match[m];
		str += m + ':' + '\n  ';

		for (let i = 0; i < wds.length; i += 1) {
			str += wds[i].join(' - ');
			str += '\n';
			if (i !== wds.length - 1) str += '  '; 
		}

		str += '\n';
	}
	return str;
}
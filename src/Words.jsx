import { useState } from 'react';
import { db } from './db/db.js';


export default function Words() {
	const [searchText, setSearchText] = useState('fundamental');
	const searchResult = db.search(searchText.trim());

	return (
		<div className="words">
			<div>
				<div className="words_search">
					<input 
						type="text"
						value={searchText}
						onInput={(e) => setSearchText(e.target.value)}
					/>
				</div>
				
				<div className="words_counter">words amount: {db.getWordCount()}</div>
				
				<div>
					<pre>{makeResultStr(searchResult)}</pre>
				</div>
			</div>
		</div>
	);
};


function makeResultStr(match) {
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
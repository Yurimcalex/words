import { useState } from 'react';
import Search from './Search.jsx';
import Count from './Count.jsx';
import { db } from '../db/db.js';


export default function Page1() {
	const [searchText, setSearchText] = useState('fundamental');
	const searchResult = db.search(searchText.trim());

	return (
		<div className="words">
			<div className="words_wrapper">
				<div className="words_search">
					<Search 
						text={searchText}
						onChangeText={(e) => setSearchText(e.target.value)}
					/>
				</div>

				<Count count={db.getWordCount()} />
				
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
import { useState } from 'react';
import Search from './Search.jsx';
import Count from './Count.jsx';
import SearchResult from './SearchResult.jsx';
import { db } from '../db/db.js';


export default function Page1() {
	const [searchText, setSearchText] = useState('fundamental');

	return (
		<div className="page1">
			<div className="page1_wrapper">
				<div className="page1_search">
					<Search 
						text={searchText}
						onChangeText={(e) => setSearchText(e.target.value)}
					/>
				</div>

				<Count count={db.getWordCount()} />
				
				<SearchResult
					data={db.search(searchText.trim())}
				/>
			</div>
		</div>
	);
};
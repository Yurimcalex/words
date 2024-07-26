import { db } from './db/db.js';


export default function Words() {
	return (
		<div className="words">
			<div>
				<div className="words_search">
					<input type="text" />
				</div>
				
				<div className="words_counter">words amount: {db.getWordCount()}</div>
				
				<div>
					<pre></pre>
				</div>
			</div>
		</div>
	);
}
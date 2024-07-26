import adjective from './words/adjective.js';
import adverb from './words/adverb.js';
import common from './words/common.js';
import noun from './words/noun.js';
import preposition from './words/preposition.js';
import pronoun from './words/pronoun.js';
import verb from './words/verb.js';

export const db = {
	words: {
		common,
		verb,
		noun,
		adjective,
		adverb,
		preposition,
		pronoun
	},

	getWordCount() {
		let result = 0;
		for (let part in this.words) {
			result += Object.keys(this.words[part]).length;
		}
		return result;
	},

	search(word) {
		const result = {};
		for (let part in this.words) {
			const match = []
			const data = this.words[part];
			for (let w in data) {
				if (w === word) {
					match.push([word, data[w]])
				}
			}
			if (match.length) result[part] = match;
		}
		return result;
	},

	isNewWord(word) {
		for (let part in this.words) {
			for (let w in this.words[part]) {
				if (w === word) {
					return false;
				}
			}
		}
		return true;
	},

	getNewWords(words) {
		let result = [];
		words.forEach(word => {
			if (this.isNewWord(word)) {
				result.push(word);
			}
		});
		return result;
	}
};
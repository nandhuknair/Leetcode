/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = sentences => sentences.map(item => item.split(' ')).sort((a,b) => b.length - a.length)[0].length
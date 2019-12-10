/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const words = paragraph.toLowerCase().replace(/[!?',;\.]/g, ' ').trim().split(/\s+/g);
    let lookup = {};
    for(let i = 0; i < words.length; i++){
        let letter = words[i];
        if (!banned.includes(letter)) {
            lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        }
    }
    let array = [];
    for(let value in lookup){
        array.push(lookup[value]);
    }
    array.sort((a,b) => (b-a));
    for(let key in lookup){
        if(lookup[key] === array[0]){
            return key;
        }
    }
};
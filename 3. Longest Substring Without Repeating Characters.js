/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    // works with the sliding window approach by using two pointers and place the characters inside the Hashmap
    let i = 0;
    let j = 0;
    let max = 0;  // will contains the max unique count
    let lookup = {};

    while( j < s.length ){
        if(!lookup[s[j]]){
            lookup[s[j]] = 1;
            j++;
            max =  Math.max(max, Object.keys(lookup).length);
        } else {
            delete lookup[s[i]];
            i++;
        }
    }
    
    return max;
    
};
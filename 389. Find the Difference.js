/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let lookup = {};
    for(let i = 0; i < t.length; i++){
        let map = t[i];
        lookup[map] ? lookup[map] += 1 : lookup[map] = 1;
    }
    
    for(let j = 0; j < s.length; j++ ){
        let map = s[j];
        lookup[map]--;  
        if(lookup[map] === 0){
            delete lookup[map];
        }
    }

    return Object.keys(lookup)[0]    
};
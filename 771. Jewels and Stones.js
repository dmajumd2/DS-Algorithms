/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let lookup = {}, count = 0;
    
    for(let i = 0; i < J.length; i++){
        let map = J[i];    
        lookup[map] ? lookup[map] += 1 : lookup[map] = 1;
    }
    
    for(let i = 0; i < S.length; i++){
        let map = S[i];  
        if(lookup.hasOwnProperty(map)){   //check the array elem in object
            count++;
        }
    }
    return count;
    
};
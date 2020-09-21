/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let lookup = {};
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        let s = nums[i];
        lookup[s] ? lookup[s] += 1 : lookup[s] = 1;
    }
    for(let key in lookup){
        let n = lookup[key];
        let v = n*(n-1)/2;
        sum += v;
    }
    
    return sum;
};
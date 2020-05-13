/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let lookup = {};
    let array = [];
    
    for(let i = 0; i < nums.length; i++){
        lookup[nums[i]] ? lookup[nums[i]] += 1 : lookup[nums[i]] = 1;
    }
    
    //check in hashmap for the key equals to 2
    for(let key in lookup){
        if(lookup[key] === 2){
            array.push(key);
        }
    }
    return array;
};
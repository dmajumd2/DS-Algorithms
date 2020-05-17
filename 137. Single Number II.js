/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //with hashmap approach
    
    const lookup = {};
    for(let i = 0; i < nums.length; i++){
        let map = nums[i];
        lookup[map] ? lookup[map] += 1 : lookup[map] = 1;
    }
    for(let property in lookup){
        if(lookup[property] === 1){
            return property;
        }
    }
    return 0;
};
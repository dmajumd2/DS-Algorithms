/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    //with iteration slow
    let array = [];
    for(let i = 0; i < nums.length; i++){
        let val = i+1;
        if(!nums.includes(val)){
            array.push(val);
        }
    }
    
    return array;
    
//using hashmap
    let lookup = {};
    let array1 = [];
    
    for(let i = 0; i < nums.length; i++){
        lookup[nums[i]] ? lookup[nums[i]] += 1 : lookup[nums[i]] = 1;
    }
  
    for(let i = 0; i < nums.length; i++){
        if(!lookup.hasOwnProperty(i+1)){
            array1.push(i+1);
        }
    }
    return array1;
    
};
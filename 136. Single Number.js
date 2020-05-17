/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const lookup = {};
    for(let i=0; i<nums.length; i++){
        lookup[nums[i]] ? lookup[nums[i]] += 1 : lookup[nums[i]] = 1;
    }
    for(var property in lookup){
        if(lookup[property] === 1){
            return property;
        }
    }
    //faster
    //return nums.reduce((prev, curr) => prev ^ curr, 0);
    

// time O(n)
// space O(1)

  // let num = 0;
  // for (let n of nums) {
  //   num ^= n;
  // }
  // return num;

};
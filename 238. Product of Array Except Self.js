/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = [];
    output[0] = 1; 
     
     for(let i = 1; i < nums.length; i++){
         output[i] = nums[i - 1] * output[i - 1];
     }
     
     let R = 1;
     for(let i = nums.length - 1; i >= 0; i--){
         output[i] = output[i] * R;
         R = nums[i] * R;
     }
     
     return output;
 };
 
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var zeroes = 0;
     for (var i = 0;  i < nums.length; i++){
         if(nums[i] === 0){
             nums.splice(i, 1);
             i--;
             zeroes++;
         }
     }
     
     while(zeroes){
         nums.push(0);
         zeroes--;
     }
 };
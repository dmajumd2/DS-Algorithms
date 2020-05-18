/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let lookup = {};
    let stack = [];
    
    //https://www.youtube.com/watch?v=8BDKB2yuGyg
    // stack and hashmap
    nums2.forEach(item => {
        while(stack.length >= 0 && item > stack[stack.length - 1]){
            lookup[stack.pop()] = item;
        }
        stack.push(item);
    })
   return nums1.map(n => lookup[n] || -1);
};
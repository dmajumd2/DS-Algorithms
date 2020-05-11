/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    // cur is the last index of nums1 array
    let cur = m+n-1;
    
    // we wanna do this if we have elements in both the arrays
    while(m>0 && n > 0){
       if(nums1[m-1] < nums2[n-1]){
           nums1[cur] = nums2[n-1]
           n--;
       }
       else {
           nums1[cur] = nums1[m-1]
            m--
       }
       cur--;
   }
   
   // if there are no elememts in nums1 then we add all nums2 to nums1
   
   while(n>0){
       nums1[cur] = nums2[n-1]
       n--; cur--;
   }
   
   // we do not wanna return anything ;)
   };
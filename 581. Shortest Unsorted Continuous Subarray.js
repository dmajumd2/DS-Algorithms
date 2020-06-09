/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER;
    let flag = false;
    //find the min where sort is breaking from the start
    for(let i = 1; i < nums.length; i++){
        if(nums[i] < nums[i-1]){
            flag = true;
        }
        if(flag){
            min = Math.min(min, nums[i]);
        }
    }
    
    flag = false;
    //find the max where sort is breaking from end
    for(let i = nums.length - 2; i >= 0; i--){
        if(nums[i] > nums[i+1]){
            flag = true;
        }
        if(flag){
            max = Math.max(max, nums[i]);
        }
    }
    
    let l,r;
    //from the start check and compare with min to mark the change index
    for(l = 0; l < nums.length; l++){
        if(min < nums[l]){
            break;
        }
    }
    
    //from the end check and compare with max to mark the change index
    for(r = nums.length - 1; r >= 0; r--){
        if(max > nums[r]){
            break;
        }
    }
    
    return r - l < 0 ? 0 : r - l + 1;
    
    -----------------------------------------------------
 //2nd approach  
let diffStart = 0;
  let diffEnd = 0;
    let notSorted = [...nums];
    console.log(notSorted)
  let arrSort = nums.sort((a,b) => a - b);
     console.log(arrSort)

  
  for (let i = 0; i < notSorted.length; i++) {
    if (notSorted[i] !== arrSort[i]) { 
      diffStart = i;
      break;
    }
  }

  for (let i = notSorted.length - 1; i >= 0; i--) {
    if (notSorted[i] !== arrSort[i]) {
      diffEnd = i + 1;
      break;
    }
  }
  
  return diffEnd - diffStart;
    
};
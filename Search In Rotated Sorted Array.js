var search = function(nums, target) {
    if(nums === null || nums.length === 0) return -1
    
    let left = 0;
    let right = nums.length - 1;
    
    //create a modified Binary search to find the lowest number as it is not sorted
    while(left < right){
        let mid = Math.floor(left + (right-left) / 2);
        if(nums[mid] > nums[right]){
            left =  mid + 1;
        } else {
            right = mid;
        }
    }
    
    // reset left and right to 0 and last index as start grab the pivot
    let start =  left;
    left = 0;
    right = nums.length - 1;
    
    // now check which side to go in array to find the target element
    if(target >= nums[start] && target <= nums[right]){
        left = start;
    } else {
        right = start;
    }
    
    // now run the normal binary search as we get which portion of array we have to traverse
    while(left <= right){
        let mid = Math.floor(left + (right-left) / 2);
        if(nums[mid] === target){
            return mid;
        } else if(nums[mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return  -1;
};
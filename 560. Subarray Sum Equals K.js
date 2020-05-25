var subarraySum = function(nums, k) {
    let lookup = {0: 1};
    let sum = 0;
    let target;
    let count = 0;
 
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        target = sum - k;
        // if we found the target in hashmap add the count 
        if(lookup[target]){
            count += lookup[target];
        }
        lookup[sum] ? lookup[sum] += 1 : lookup[sum] = 1;
    }
    return count;
};
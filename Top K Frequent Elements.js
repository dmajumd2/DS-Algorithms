var topKFrequent = function(nums, k) {
    const lookup = {};
    let array = [];

    for(let i = 0; i < nums.length; i++){
        let number = nums[i];
        lookup[number] ? lookup[number] += 1 : lookup[number] = 1;
    }
    
    let sortedArray = Object.entries(lookup).sort((a,b) => b[1] - a[1])
    
    for(let i = 0; i < k; i++){
        array.push(sortedArray[i][0]);
    }
    return array;
};
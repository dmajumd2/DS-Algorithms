var majorityElement = function(nums) {
    let array = [];
    let lookup = {};
    let max = 0;
    
    
    //store count of values in the hashmap
    for(let i = 0; i < nums.length; i++){
        lookup[nums[i]] ? lookup[nums[i]] += 1 : lookup[nums[i]] = 1;
    }
    
    //insert all the values in array
    for(let property in lookup){
        array.push(lookup[property]);
    }
    
    //find max from the array
    max = Math.max(...array);
    
    //check for max value property in obj
    for(let property in lookup){
        if(lookup[property] === max){
            return property;
        }
    }
    
};
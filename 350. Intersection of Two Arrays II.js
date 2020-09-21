var intersect = function(nums1, nums2) {
    const lookup = {};
    let array = [], num, num1, count = 0, v;
    for(let i = 0 ; i < nums1.length; i++){
        num = nums1[i];
        lookup[num] ? lookup[num] += 1 : lookup[num] = 1;
    }
    for(let i of nums2){
        if(lookup[i]){
            lookup[i]--;
            array.push(i)
        }
    }
   return array;
};

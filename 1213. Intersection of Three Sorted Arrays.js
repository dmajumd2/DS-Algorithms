/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    let lookup = {};
    let array1 = [];
    
    for(let i = 0; i < arr1.length; i++){
        let num = arr1[i];
        lookup[num] ? lookup[num] += 1 : lookup[num] = 1
    }
    
    for(let i of arr2){
        if(lookup[i]){ 
            array1.push(i);
            lookup[i]--;
        }
    }
 
     let lookup1 = {};
     for(let i = 0; i < array1.length; i++){
        let num = array1[i];
        lookup1[num] ? lookup1[num] += 1 : lookup1[num] = 1
     }
  
    let array2 = [];
    for(let i of arr3){
        if(lookup1[i]){
            array2.push(i);
            lookup1[i]--;   
        }
    }
    return array2
};
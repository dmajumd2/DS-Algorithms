/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let res = [];
    
    //sort the array if condition is true then sort by k as ascending order if false the sort by h as descending
    people.sort((a,b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]);
    
    //with splice make val[1] to select its index for the (h,k) to put val in that position
    people.forEach(val => {
        res.splice(val[1], 0, val);
    })
    
    return res;
};
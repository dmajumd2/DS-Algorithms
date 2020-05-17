/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    
    let count = 0, currcount = 1, newChar;
    
    for(let i = 0; i < s.length; i++){
        //if next char is same then add 1 to curr count to track the max consecutive count
        if(s[i] === s[i+1]){   
            currcount++;
        }else {
            //if the next one is not same then update the count from currcount and also update the new char to currcount char and make the currcount to 1 to start again if found new consecutive chars
            if(currcount > count){
                count = currcount;
                newChar = s[i];
            }
            currcount = 1;
        }
    }
    return count; 
};
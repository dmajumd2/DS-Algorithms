/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let result = new Array(T.length);
    let stack = [];
    
    for(let i = T.length - 1; i >= 0; i--){
        //stack top element is less than the current than pop
        while( T[i] >= T[stack[stack.length - 1]] ){
            stack.pop();
        }
        
        //if the stack is empty the we need to put 0
        if(stack.length == 0){
            result[i] = 0;
        } else { //if stak top element is greater than the curr its index diff to put
            result[i] = stack[stack.length - 1] - i;
        }
        
        stack.push(i);
    }
    return result;
    
};
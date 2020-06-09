/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let result = '';
    let carry = 0;
    while(i >= 0 || j >= 0){
        let sum = carry;
        if(i >= 0){
           sum += num1[i--] - '0'; 
        }
        if(j >= 0){
            sum += num2[j--] - '0';  //will convert string to number to sum
        }
        
        result = result + sum % 10; //to add the reminder 9 + 6 = 15, 5 will add
        carry = Math.trunc(sum / 10);  //from 15, 1 will go to carry
    }
    
    if(carry != 0){
        result += carry;
    }
    
    return result.toString().split("").reverse().join("");
    
     
    
    //2nd approach
    let carry = 0,
        result = "",
        i1 = num1.length - 1,
        i2 = num2.length - 1;
    
    while(i1>=0 || i2>=0){
        const val1 = num1[i1--] || 0;
        const val2 = num2[i2--] || 0;
        const sum = +val1 + +val2 + carry;
        result = sum % 10 + result;
        carry = Math.trunc(sum / 10); 
    }

    if(carry) result = carry + result;
    
    return result
    
    
};
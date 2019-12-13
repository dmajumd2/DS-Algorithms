var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    let array = [];
    while(i <= j){
        let addition = numbers[i] + numbers[j];
        if(addition === target){
            array.push(i+1,j+1);
            return array;
            break;
        } else if(addition < target){
            i++;
        } else {
            j--;
        }
    }
};
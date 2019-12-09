var searchMatrix = function(matrix, target) {
    if(matrix === null || matrix.length === 0){
        return false;
    }
     
     let row = matrix.length;
     let column = matrix[0].length;
     
     let left = 0;
     let right = row*column-1;  // to find the last index of matrix
     
     while(left <= right){
         let mid = Math.floor((left + right)/2)
         
         //this will find the mid element in 2d matrix
         let midpoint = matrix[Math.floor(mid/column)][mid%column];
         if(midpoint === target){
             return true;
         } else if(midpoint < target){
             left = mid + 1;
         } else if(midpoint > target){
             right = mid - 1;
         }
     }
     
     return false;
 };
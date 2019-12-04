var setZeroes = function(matrix) {
    arr = [];
    
    //fill the array with index of 0 element
    for(let row = 0; row < matrix.length; row += 1){
        for(let col = 0; col < matrix[row].length; col += 1){
            if(matrix[row][col] === 0) {
                arr.push([row, col])
            }
        }
    }
    
    for(let change of arr){
        helper(change)
    }
    
    //we get the row and col index iterate through that row and col and make it 0
    function helper(change){
        let [row, col] = change
        for(let i = 0; i < matrix.length; i+=1){
            matrix[i][col] = 0
        }
        for(let j = 0; j < matrix[0].length; j+=1){
            matrix[row][j] = 0
        }
    }
};
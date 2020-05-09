/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    let letters = s.split('');
    let i = 0;
    let j = letters.length - 1;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    while(i < j){
        let temp = '';
        
        //check for letter includes in vowels array for both sides
        if(vowels.includes(letters[i]) && vowels.includes(letters[j])){
            temp = letters[j];
            letters[j] = letters[i];
            letters[i] = temp;
            i++;
            j--;
        } else if (!vowels.includes(letters[i])) {
            i++;
        } else {
            j--;
        }  
    }
    return letters.join('');
    
};
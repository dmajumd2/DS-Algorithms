var longestPalindrome = function(s) {
    if(s === null || s.length < 1) return "";
    
    let start = 0;
    let end = 0;
    
    // this loop will go through the each char and check for two cases
    //racecar and aaabbaaa
    for(let i = 0; i < s.length; i++){
        let len1 = expandFromMiddle(i,i,s); //racecar
        let len2 = expandFromMiddle(i,i+1,s); //aaabbaaa
        let len = Math.max(len1,len2);  // longest length
        if(len > end - start){ 
             // calculate the start index and end index for finding substring
            start = i - Math.floor((len - 1) / 2); 
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end+1);
};

//expanding from middle until not equal for checking palindrome
var expandFromMiddle = function(left, right, s){
    if(s === null || left > right){
        return 0;
    }
    
    while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)){
        left--;
        right++;
    }
    
    return right - left - 1;
}
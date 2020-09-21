var removeVowels = function(S) {
    let lookup = {
        'a' : 'a',
        'e' : 'e',
        'i' : 'i',
        'o' : 'o',
        'u' : 'u'
    }   
    let array = S.split('')
    for(let i = 0; i < array.length; i++){
        let chr = array[i];
        if(chr == lookup[chr]){
            array.splice(i, 1);
            i--;
        }
    }
    return array.join('');
};

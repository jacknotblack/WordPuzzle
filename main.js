$(document).ready(function(){
    const size = 20;
    charArray = generateRandomCharArray(size);
    populatePuzzle(charArray);
    //get the result of word search
    //if the result is false, generate a new array for next run
    $('#run').click(function(){
        let res = wordSearch(charArray, "CBABDDAB");
        console.log(res);
        if(res){alert()}
        else{
            charArray = generateRandomCharArray(size);
            charArray = [['XXABCX'],['XXBXBX'],['XXDDAX'],['XXXXBX'], ['XXXXXX']];
            populatePuzzle(charArray);
        }
    });
});
//generate a random uppercase charactor
var generateRandomChar = function(){
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random()*26));
}

//generate an array of length N while each element is an array containing a string of length N
//N = size
var generateRandomCharArray = function(size){
    let array = [];
    for(let i = 0; i < size; i++){
        let chars = ""
        for(let j = 0; j < size; j++){
            chars += generateRandomChar();
        }
        array.push([chars]);
    }
    return array;
}

//render the array 
var populatePuzzle = function(array){
    let puzzle = $("#puzzle");
    puzzle.html("");
    for(let i = 0; i < array.length; i++){
        let row = $("<tr></tr>");
        for(let j = 0; j < array[i][0].length; j++){
            row.append($("<td>" + array[i][0][j] + "</td>"));
        }
        puzzle.append(row);
    }
}
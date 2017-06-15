$(document).ready(function () {
    const size = 20;
    charArray = generateRandomCharArray(size);
    //get the result array of words search
    var runSearch = function (words) {
        return function () {
            let res = wordSearch(charArray, words);
            console.log(res);
            renderRes(words, res);
            //charArray = generateRandomCharArray(size);
        }
    };

    //read file and split into rows
    $.get("input.txt", function (res) {
        var rows = res.split('\n');
        $('#run').click(runSearch(rows));
        $('#regen').click(function () {
            charArray = generateRandomCharArray(size);
            runSearch(rows)();
        })
    })

});

var renderRes = function (words, results) {
    const resultList = $("#results~ul");
    const resultNameList = $('#results');
    resultList.html("");
    resultNameList.html("");
    for (let i = 0; i < words.length; i++) {
        resultNameList.append($("<li>" + words[i] + "：</li>"));
        resultList.append($("<li>" + results[i] + "</li>"));
    }
}
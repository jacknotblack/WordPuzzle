var wordSearch = function (puzzle, word) {
    var traverse = function (puzzle, word, y, x, i, visited) {
        const outofBound = y < 0 || x < 0 || y === puzzle.length || x === puzzle[y][0].length;
        if (outofBound) {
            return false;
        }

        if (visited.indexOf(y + "-" + x) !== -1) {
            return false;
        }

        const charMatch = puzzle[y][0][x] === word[i];
        if (!charMatch) {
            return false;
        }
        const endofWord = i === word.length - 1;
        if (endofWord) {
            console.log(visited);
            return true;
        }

        //mark the node as visited
        const coord = y + "-" + x;
        visited.push(coord);

        //traverse 4 directions
        const subPath = traverse(puzzle, word, y - 1, x, i + 1, visited) ||
            traverse(puzzle, word, y + 1, x, i + 1, visited) ||
            traverse(puzzle, word, y, x - 1, i + 1, visited) ||
            traverse(puzzle, word, y, x + 1, i + 1, visited);

        // mark the node as unvisited as we go back when the subpath of this node doesn't work
        if (!subPath) {
            visited.pop();
        }
        return subPath;
    }
    for (let y = 0; y < puzzle.length; y++) {
        for (let x = 0; x < puzzle[y][0].length; x++) {
            if (traverse(puzzle, word, y, x, 0, [])) {
                return true;
            }
        }
    }
    return false;
}
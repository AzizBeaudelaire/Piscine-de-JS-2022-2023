function slice(entry, startingPoint = 0, endingPoint = entry.length) {
    var stringResult = "";
    var tabResult = [];
    if (startingPoint < 0) {
        startingPoint = entry.length + startingPoint; // if sP == -3 for example and entry == 6, sP = 6+(-3) = 3, which is the same result as if it was entry.length - 3 as I did look the commented function bellow
        if (typeof entry === 'string' && startingPoint < 0) {
          startingPoint = 0; // adjust negative indices for strings
        }
    }
    if (endingPoint < 0) {
        endingPoint = entry.length + endingPoint; // negative indices for arrays
        if (typeof entry === 'string' && endingPoint < 0) {
          endingPoint = 0; // adjust negative indices for strings
        }
    }
    for (var i = startingPoint; i <= endingPoint - 1; i++) {
        if (i >= startingPoint && i < endingPoint) { // between starting and ending points
            if (typeof entry === 'string') {
              stringResult += entry[i];
            } else if (Array.isArray(entry)) {
              tabResult.push(entry[i])
            }
        }
    }
    if (typeof entry === 'string') {
        return stringResult;
    } else {
        return tabResult;
    }
}


console.log(slice('abcdef', 2, 4));


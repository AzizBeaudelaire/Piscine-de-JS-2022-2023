function letterSpaceNumber(str) {
    const letter = /[a-z]\s\d\b/gi;
    const end = str.match(letter);
    if (end !== null){
        return end
    } else {
        return []
    }
}


/*Create a function named letterSpaceNumber that accepts a string; 
returning an array with every instance of a letter, followed by a space, 
followed by a number, only if that number has only one digit, and is not 
followed by any letter.*/


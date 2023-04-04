function sameAmount(str, regex1, regex2) {
    const match1 = str.match(new RegExp(regex1,'g')) || [];
    const match2 = str.match(new RegExp(regex2,'g')) || [];
    return match1.length === match2.length;
}

/*Create a function named sameAmount, that takes three arguments: a string, 
and 2 regular expressions. Your function should return a boolean.

The objective is to confirm that the regular expressions match the string 
the same number of times.*/
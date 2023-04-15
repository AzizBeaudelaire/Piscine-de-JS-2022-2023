function invert(obj) {
    const inverted = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            inverted[obj[key]] = key;
        }
    }
    return inverted;
}

/*Instructions
Create a function named invert which takes an object and returns a new one with its keys and values inverted.

*/
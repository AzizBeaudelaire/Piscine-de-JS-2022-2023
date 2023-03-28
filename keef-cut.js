// Function to remove first 2 characters from a string
function cutFirst(str) {
    return str.slice(2);
}

// Function to remove last 2 characters from a string
function cutLast(str) {
    return str.slice(0, -2);
}

// Function to remove first 2 and last 2 characters from a string
function cutFirstLast(str) {
    return str.slice(2, -2);
}

// Function to keep first 2 characters of a string
function keepFirst(str) {
    return str.slice(0, 2);
}

// Function to keep last 2 characters of a string
function keepLast(str) {
    return str.slice(-2);
}

// Function to keep first 2 and last 2 characters of a string
function keepFirstLast(str) {
    if (str.length <= 2) {
        return str;
    } else if (str.length === 3) {
        return str.slice(0, 2) + str.slice(-1);
    } else {
        return str.slice(0, 2) + str.slice(-2);
    }
}
  
const str = "Hello, world!";
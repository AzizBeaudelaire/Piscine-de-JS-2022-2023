function map(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i, arr));
    }
    return result;
}
  
function flatMap(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const mapped = func(arr[i], i, arr);
        result.push(...mapped);
    }
    return result;
}

/*Instructions
Create a map function that takes an array as the first argument, a function as 
second, and that works like the method .map

Create a flatMap function that takes an array as the first argument, a 
function as second, and that works like the method .flatMap*/


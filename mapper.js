function posValsIndex(arr, index) {
    if (arr[index] > 0) {
        return `undefined: ${arr[index]}`;
    } else {
        return undefined;
    }
}
  
function flatMap(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const mapped = func(arr[i]);
        for (let j = 0; j < mapped.length; j++) {
            result.push(mapped[j]);
        }
    }
    return result;
}
  

/*Instructions
Create a map function that takes an array as the first argument, a function as 
second, and that works like the method .map

Create a flatMap function that takes an array as the first argument, a 
function as second, and that works like the method .flatMap*/


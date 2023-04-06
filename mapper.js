function map(arr, func) {
    return arr.reduce((result, item) => {
        result.push(func(item));
        return result;
    }, []);
}
  
function flatMap(arr, func) {
    return arr.reduce((result, item) => {
        const mapped = func(item);
        if (Array.isArray(mapped)) {
            result.push(...mapped);
        } else {
            result.push(mapped);
        }
        return result;
    }, []);
}
  

/*Instructions
Create a map function that takes an array as the first argument, a function as 
second, and that works like the method .map

Create a flatMap function that takes an array as the first argument, a 
function as second, and that works like the method .flatMap*/


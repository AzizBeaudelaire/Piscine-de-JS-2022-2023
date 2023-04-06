function adder(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function sumOrMul(arr, init) {
    return arr.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
        return accumulator * currentValue;
    } else {
        return accumulator + currentValue;
    }
    }, init || 0);
}

function funcExec(funcArr, init) {
    return funcArr.reduce((accumulator, currentValue) => {
    if (typeof currentValue === 'function') {
        return currentValue(accumulator);
    }
    return accumulator;
    }, init || null);
}
  
/*Instructions
Create the following functions:

Your solutions must use reduce.

adder: accepts an array of numbers, and returns the sum as a number.

sumOrMul: accepts an array of numbers and adds or multiplies its elements depending 
on whether the element is odd or even. Even = multiply. Odd = add.

funcExec: accepts an array of functions and executes them using reduce, returning the
result.

Each function may accept an optional argument, which should be the initial value for 
the function's execution.

Example:
sumOrMul([1, 2, 3, 5, 8], 5) // (((((5 + 1) * 2) + 3) + 5) * 8) -> 160
*/
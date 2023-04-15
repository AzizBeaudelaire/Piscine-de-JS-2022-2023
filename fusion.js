function fusion(obj1, obj2) {
    var fusioned = {};
    for (var key in obj1) {
        if (!obj1.hasOwnProperty(key)) continue;
        if (obj2.hasOwnProperty(key)) {
            if (is.obj(obj1[key]) && is.obj(obj2[key])) {
                fusioned[key] = fusion(obj1[key], obj2[key]);
            } else if (is.arr(obj1[key]) && is.arr(obj2[key])) {
                fusioned[key] = obj1[key].concat(obj2[key]);
            } else if (is.num(obj1[key]) && is.num(obj2[key])) {
                fusioned[key] = obj1[key] + obj2[key];
            } else if (is.str(obj1[key]) && is.str(obj2[key])) {
                fusioned[key] = obj1[key] + " " + obj2[key];
            } else {
                fusioned[key] = obj2[key];
            }
        } else {
            fusioned[key] = obj1[key];
        }
    }
    for (var key in obj2) {
        if (!obj2.hasOwnProperty(key)) continue;
        if (!obj1.hasOwnProperty(key)) {
            fusioned[key] = obj2[key];
        }
    }
    return fusioned;
}

const is = {};
is.num = (n) => typeof n === "number";
is.str = (n) => typeof n === "string";
is.arr = (n) => Array.isArray(n);
is.obj = (n) => typeof n === "object" && !is.fun(n) && !is.arr(n) && n !== null;
is.fun = (n) => typeof n === "function";

/*Instructions
The objective of this exercise is to merge objects into a new object depending on the values type.

Create a function named fusion that:

For array types, you will concatenate them.
fusion({ arr: [1, "2"] }, { arr: [2] }); // -> { arr: [ 1, '2', 2 ] }
fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }); // ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }

For strings, you must concatenate them with a space.
fusion({ str: "salem" }, { str: "alem" }); // -> { str: 'salem alem' }
fusion({ str: "salem" }, { str: "" }); // -> { str: 'salem ' }

If they are numbers, you must add them.
fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }); // -> { a: 20, b: 10, c: 1 }

If it is an object, you must join them recursively.
fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }); // -> { a: 11, x: [], b: { c: 'Salem alem' } }
fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } }); // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }

In case of type mismatch you must replace it with the value of the second object (if it exists).
fusion({ a: "hello", b: [] }, { a: 4 }); // -> { a: 4, b: [] }*/


function filterValues(obj, callback) {
    let res = {};
    for (let key in obj) {
        if (callback(obj[key])) {
            res[key] = obj[key];
        }
    }
    return res;
}

function mapValues(obj, callback) {
    let res = {};
    for (let key in obj) {
        res[key] = callback(obj[key]);
    }
    return res;
}

function reduceValues(obj, callback, acc) {
    if (acc === undefined) {
        acc = 0;
    }
    for (let key in obj) {
        acc = callback(acc, obj[key]);
    }
    return acc;
}

/*Instructions
Let's buy groceries.

You have a grocery cart with some items you need. The item's name is the key, and the value will represent nutrition facts per 100 grams.

Create 3 functions that work like the .filter, .map and .reduce array methods, for the values in your grocery cart object. You can see their function names and how they work in the examples.

Examples
const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// output: { carbohydrates: 12, fat: 5 }

console.log(mapValues(nutrients, (v) => v+1))
// output: { carbohydrates: 13, protein: 21, fat: 6 }

console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// output: 37
You will have a small database to help you with the groceries.*/
function filterEntries(obj, filter) {
    let res = {};
    for (let key in obj) {
        if (filter([key, obj[key]])) {
            res[key] = obj[key];
        }
    }
    return res;
}

function mapEntries(entries, mapper) {
    let temp = {};
    for (let key in entries) {
        temp[key] = mapper([key, entries[key]]);
    }
    let res = {};
    for (let key in temp) {
        res[temp[key][0]] = temp[key][1];
    }
    return res;
}

function reduceEntries(entries, reducer, initialValue) {
    let acc = initialValue;
    for (let key in entries) {
        acc = reducer(acc, [key, entries[key]]);
    }
    return acc;
}

function lowCarbs(entries) {
    // prettier-ignore
    return filterEntries(entries, (entry) => {let value = (nutritionDB[entry[0]]["carbs"] / 100) * entry[1];return parseInt(value) <= 50;});
}

function totalCalories(entries) {
    return Number(
        reduceEntries(
            entries,
            (acc, curr) => {
                let value = (nutritionDB[curr[0]]["calories"] / 100) * curr[1];
                return acc + value;
            },
            0
        ).toFixed(1)
    );
}

function cartTotal(entries) {
    let res = {};
    for (let key in entries) {
        res[key] = {};
        for (let dbKey in nutritionDB[key]) {
            res[key][dbKey] =
                Math.round(
                    (entries[key] / 100) * nutritionDB[key][dbKey] * 1000
                ) / 1000;
        }
    }
    return res;
}

/*Instructions
Create 3 functions which work like the .filter, .map and .reduce array methods, but for the entries in the grocery cart.

filterEntries: filters using both key and value.
mapEntries: changes the key, the value or both.
reduceEntries: reduces the entries.
Create 3 additional functions that use your previously created functions and take an object as input:

totalCalories: that will return the total calories of a cart.
lowCarbs: that leaves only those items which are lower than 50 grams.
cartTotal: that will give you the right amount of calories, proteins... and all the other items in your grocery cart.
Think about the shape of Object.entries()

Code provided
The provided code will be added to your solution, and does not need to be submitted.

// small database with nutrition facts, per 100 grams
// prettier-ignore
const nutritionDB = {
  tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
  vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
  oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
  onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
  garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
  paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
  sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
  orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
}
Usage
Here is a possible script to test your functions:

const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

console.log('Total calories:')
console.log(totalCalories(groceriesCart))
console.log('Items with low carbs:')
console.log(lowCarbs(groceriesCart))
console.log('Total cart nutional facts:')
console.log(totalCart(groceriesCart))
And its output:

Total calories:
2112.2
Items with low carbs:
{ oil: 20 }
Total cart nutional facts:
{
  orange: {
    calories: 245,
    protein: 4.5,
    carbs: 65,
    sugar: 45,
    fiber: 1,
    fat: 0.5
  },
  oil: {
    calories: 9.6,
    protein: 0,
    carbs: 0,
    sugar: 24.6,
    fiber: 0,
    fat: 30.2
  },
  sugar: {
    calories: 1857.6,
    protein: 0,
    carbs: 480,
    sugar: 480,
    fiber: 0,
    fat: 0
  }
}

*/
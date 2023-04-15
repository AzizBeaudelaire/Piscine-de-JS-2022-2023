function pick(obj, keys) {
    const picked = {};
    for (let key in obj) {
        let regexp = new RegExp(`^${key}$`);
        if (typeof keys === "string") {
            if (keys.match(regexp)) {
                picked[key] = obj[key];
            }
        } else {
            if (keys.includes(key)) {
                picked[key] = obj[key];
            }
        }
    }
    return picked;
}

/*
Create two functions which takes an object and a string or array of strings. They should return a new object which:

pick: contains only those keys which appear in the string or array of strings.
omit: contains only those keys which do not match the string, or do not appear in the array of strings.
Those functions are pure and must not modify the given object*/
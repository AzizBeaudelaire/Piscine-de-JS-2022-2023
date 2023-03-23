const sourceObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};

function get(key) {
    return sourceObject[key];
}

function set(key, value) {
    sourceObject[key] = value;
    return sourceObject[key];
}
  
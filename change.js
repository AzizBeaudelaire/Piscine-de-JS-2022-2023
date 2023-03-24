const sourceObject = (2);

function get(key) {
    return sourceObject[key];
}

function set(key, value) {
    sourceObject[key] = value;
    return sourceObject[key];
}
  
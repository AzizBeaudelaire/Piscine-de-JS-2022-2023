function round(number) {
    return Math.floor(number + 0.5);
}

function ceil(number) {
    return Math.ceil(number);
}

function floor(number) {
    return Math.floor(number);
}

  
function trunc(number) {
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}

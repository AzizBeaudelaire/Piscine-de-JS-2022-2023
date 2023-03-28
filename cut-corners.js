function round(number) {
    const decimalPart = number - Math.floor(number);
    if (decimalPart >= 0.5) {
        return Math.ceil(number);
    } else {
        return Math.floor(number);
    }
}

function ceil(number) {
    return number === Math.floor(number) ? number : Math.floor(number) + 1;
}

function floor(number) {
    return number === Math.ceil(number) ? number : Math.ceil(number) - 1;
}

function trunc(number) {
    return number > 0 ? Math.floor(number) : Math.ceil(number);
}
function slice(input, start, end) {
    if (typeof input === 'string') {
        return input.substring(start, end);
    } else if (Array.isArray(input)) {
        return input.slice(start, end);
    } else {
        throw new Error('Input must be a string or an array.');
    }
}
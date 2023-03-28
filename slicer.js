function slice(input, start, end) {
    if (typeof input === 'string') {
        if (start < 0) {
          start = input.length + start;
        }
        if (end < 0) {
          end = input.length + end;
        }
        return input.substring(start, end);
    } else if (Array.isArray(input)) {
        if (start < 0) {
          start = input.length + start;
        }
        if (end < 0) {
          end = input.length + end;
        }
        return input.slice(start, end);
    } else {
        throw new Error('Input must be a string or an array.');
    }
}



function first(input) {
    return input[0];
}

function last(input) {
  return input[input.length - 1];
}

function kiss(input) {
    const first = input[0];
    const last = input[input.length - 1];
    return [last, first];
}
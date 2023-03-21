const escapeStr = "`\\/\"'";

const arr = Object.freeze([4, '2']);

const nestedObj = {
  str: 'Nested object string',
  num: 10,
  bool: false
};

const nestedArr = Object.freeze([4, undefined, '2']);

const nested = Object.freeze({
  obj: Object.freeze(nestedObj),
  arr: nestedArr
});

const obj = Object.freeze({
  str: 'Hello World',
  num: 42,
  bool: true,
  undef: undefined,
  nested: nested
});

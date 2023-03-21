const escapeStr = "`\\/\"'";

const arr = Object.freeze([4, '2']);

const obj = Object.freeze({
  str: 'Hello World',
  num: 42,
  bool: true,
  undef: undefined,
  nested: Object.freeze({
    arr: Object.freeze([4, undefined, '2']),
    obj: Object.freeze({
      str: 'Nested object string',
      num: 10,
      bool: false
    })
  })
});
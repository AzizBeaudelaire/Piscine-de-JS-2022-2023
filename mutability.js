let person = {
    name: "Hugo-M Taj",
    age: 25,
    country: "CA",
};

let clone1 = Object.assign({}, person);
let clone2 = Object.assign({}, person);
let samePerson = person;

person.age += 1;
person.country = "FR";

console.log("person:", person); // { name: 'Hugo-M Taj', age: 26, country: 'FR' }
console.log("clone1:", clone1); // { name: 'Hugo-M Taj', age: 25, country: 'CA' }
console.log("clone2:", clone2); // { name: 'Hugo-M Taj', age: 25, country: 'CA' }
console.log("samePerson:", samePerson); // { name: 'Hugo-M Taj', age: 26, country: 'FR' }
  
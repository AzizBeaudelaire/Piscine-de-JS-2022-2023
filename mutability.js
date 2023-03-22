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

console.log("person:", person);
console.log("clone1:", clone1);
console.log("clone2:", clone2);
console.log("samePerson:", samePerson);
  
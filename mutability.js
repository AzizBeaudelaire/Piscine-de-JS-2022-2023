const clone1 = Object.assign({}, person);
const clone2 = Object.assign({}, person);
const samePerson = Object.assign({}, person);

person.age += 1;
person.country = 'FR';

samePerson = person;
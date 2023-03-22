const person = {
    name: 'Hugo-M Taj',
    age: 30,
    country: 'CA'
  };
  
  const clone1 = Object.assign({}, person);
  const clone2 = Object.assign({}, person);
  const samePerson = Object.assign({}, person);
  
  person.age += 1;
  person.country = 'FR';
  
  console.log(person);    
  console.log(clone1);    
  console.log(clone2);    
  console.log(samePerson);
  
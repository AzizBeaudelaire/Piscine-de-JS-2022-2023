function getArchitects() {
    const architects = [];
    const nonArchitects = [];
    const people = document.querySelectorAll('#peopleList > li');
    people.forEach(person => {
        const isArchitect = person.classList.contains('architect');
        if (isArchitect) {
            architects.push(person.querySelector('a'));
        } else {
            nonArchitects.push(person);
        }
    });
    return [architects, nonArchitects];
}
  
function getClassical() {
    const classicalArchitects = [];
    const nonClassicalArchitects = [];
    const people = document.querySelectorAll('#peopleList > li');
    people.forEach(person => {
        const isClassical = person.classList.contains('classical');
        const isArchitect = person.classList.contains('architect');
        if (isArchitect) {
            if (isClassical) {
                classicalArchitects.push(person.querySelector('a'));
            } else {
                nonClassicalArchitects.push(person.querySelector('a'));
            }
        }
    });
    return [classicalArchitects, nonClassicalArchitects];
}
  
function getActive() {
    const activeClassicalArchitects = [];
    const nonActiveClassicalArchitects = [];
    const people = document.querySelectorAll('#peopleList > li');
    people.forEach(person => {
        const isClassical = person.classList.contains('classical');
        const isArchitect = person.classList.contains('architect');
        const isActive = person.classList.contains('active');
        if (isArchitect) {
            if (isClassical) {
                if (isActive) {
                    activeClassicalArchitects.push(person.querySelector('a'));
                } else {
                    nonActiveClassicalArchitects.push(person.querySelector('a'));
                }
            } else {
                nonActiveClassicalArchitects.push(person.querySelector('a'));
            }
        }
    });
    return [activeClassicalArchitects, nonActiveClassicalArchitects];
}
  
function getBonannoPisano() {
    const activeClassicalArchitects = [];
    const bonannoPisano = document.querySelector('#BonannoPisano');
    const people = document.querySelectorAll('#peopleList > li');
    people.forEach(person => {
        const isClassical = person.classList.contains('classical');
        const isArchitect = person.classList.contains('architect');
        const isActive = person.classList.contains('active');
        if (isArchitect && isClassical) {
            if (person.querySelector('a') === bonannoPisano) {
                return;
            }
            if (isActive) {
                activeClassicalArchitects.push(person.querySelector('a'));
            }
        }
    });
    return [bonannoPisano, activeClassicalArchitects];
}
  
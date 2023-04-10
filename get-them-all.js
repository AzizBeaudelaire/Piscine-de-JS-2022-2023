export const getArchitects = () => {
    const architects = [];
    const other = [];
    
    const achiElements = document.getElementsByTagName("a");
    for (let person of achiElements) {
        architects.push(person);
    }
    
    const otherElements = document.getElementsByTagName('span');
    for (let person of otherElements) {
        other.push(person);
    }
    return [architects, other];
}

export const getClassical = () => {
    const classical = [];
    const nonClassical = [];
    
    for (let person of document.getElementsByClassName('classical')) {
        classical.push(person);
    }
    
    for (let person of document.querySelectorAll('a:not(.classical)')) {
        nonClassical.push(person);
    }
    return [classical, nonClassical]
    
}
    
    export const getActive = () => {
    const active = [];
    const nonActive = [];
    
    for (let person of document.getElementsByClassName('classical active')) {
        active.push(person);
    }
    
    for (let person of document.querySelectorAll('.classical:not(.active)')) {
        nonActive.push(person);
    }
    return [active, nonActive];
}
    
export const getBonannoPisano = () => {
    const notPisano = [];
    const pisano = document.querySelector('#BonannoPisano');
    
    for (let person of document.getElementsByClassName('classical active')) {
        if (person.id !== "BonannoPisano")
            notPisano.push(person);
    }
    
    
    return [pisano, notPisano];
}
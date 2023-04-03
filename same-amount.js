function sameAmount(str, regExp1, regExp2) {
    let firstCount = 0;
    let secondCount = 0;
  
    while (regExp1.test(str)) {
        firstCount++;
        str = str.replace(regExp1, '');
    }
  
    while (regExp2.test(str)) {
         secondCount++;
        str = str.replace(regExp2, '');
    }
  
    return firstCount === secondCount && str === '';
}
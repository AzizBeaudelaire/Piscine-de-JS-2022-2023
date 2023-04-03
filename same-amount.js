function sameAmount(str, regExp1, regExp2) {
    let firstCount = 0;
    let secondCount = 0;
  
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i).match(regExp1)) {
            firstCount++;
            i += str.slice(i).search(regExp1) + regExp1.source.length - 1;
        }
      if (str.slice(i).match(regExp2)) {
            secondCount++;
            i += str.slice(i).search(regExp2) + regExp2.source.length - 1;
        }
    }
  
    return firstCount === secondCount;
}
  
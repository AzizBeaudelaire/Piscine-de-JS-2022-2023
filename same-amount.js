function sameAmount(str, regex1, regex2) {
    let count1 = 0;
    let count2 = 0;
    let match1;
    let match2;
  
    while ((match1 = regex1.exec(str)) !== null) {
        count1++;
    }
  
    while ((match2 = regex2.exec(str)) !== null) {
        count2++;
    }
  
    return count1 === count2;
}
  
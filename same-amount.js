function sameAmount(str, regex1, regex2) {
    let count1 = 0;
    let count2 = 0;
  
    while (true) {
        let match1 = regex1.exec(str);
        let match2 = regex2.exec(str);
  
        if (!match1 && !match2) {
            return count1 === count2;
        }
  
        if (match1) {
            count1++;
        }
  
        if (match2) {
            count2++;
        }
    }
}
  
  
  
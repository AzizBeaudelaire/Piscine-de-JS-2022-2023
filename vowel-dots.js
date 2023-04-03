function vowelDots(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i].toLowerCase()) !== -1) {
            result += s[i] + '.';
        } else {
            result += s[i];
        }
    }
    return result;
  }
  
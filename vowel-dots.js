function vowelDots(s) {
    const vowels = /[aeiou]/gi;
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (vowels(s[i])) {
            result += s[i] + ".";
        } else {
            result += s[i];
        }
    }
    return result;
}

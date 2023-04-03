function vowelDots(s) {
    const vowels = /[aeiou]/gi;
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (vowels.test(s[i])) {
            result += s[i] + ".";
        } else {
            result += s[i];
        }
    }
    return result;
}

module.exports = vowelDots;

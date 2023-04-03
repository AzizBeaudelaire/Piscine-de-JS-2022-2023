function vowelDots(s) {
    const vowels = /[aeiou]/gi;
    return s.replace(vowels, '$&.');
}
  
// filterShortStateName
function filterShortStateName(arr) {
    return arr.filter(state => state.length < 7);
}

// filterStartVowel
function filterStartVowel(arr) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return arr.filter(state => vowels.includes(state.toLowerCase()[0]));
}

// filter5Vowels
function filter5Vowels(arr) {
    const regex = /[aeiou]/gi;
    return arr.filter(state => state.match(regex)?.length >= 5);
}

// filter1DistinctVowel
function filter1DistinctVowel(arr) {
    return arr.filter(state => {
    const vowels = new Set(state.toLowerCase().match(/[aeiou]/g));
    return vowels.size === 1;
  });
}

// multiFilter
function multiFilter(arr) {
    return arr.filter(obj => {
    const { capital, name, tag, region } = obj;
        const vowels = /[aeiou]/i;
        return (
            capital.length >= 8 &&
            !vowels.test(name[0]) &&
            tag.match(vowels) &&
            region !== 'South'
        );
    });
}

  
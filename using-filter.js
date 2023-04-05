function filterShortStateName(arr) {
    return arr.filter(str => str.length < 7);
}

function filterStartVowel(arr) {
    return arr.filter(str => ['a', 'e', 'i', 'o', 'u'].includes(str[0].toLowerCase()));
}

function filter5Vowels(arr) {
    return arr.filter(str => {
        const vowels = str.match(/[aeiou]/gi);
    return vowels && vowels.length >= 5;
    });
}

function filter1DistinctVowel(arr) {
    return arr.filter(str => {
        const vowels = str.match(/[aeiou]/gi);
    return vowels && new Set(vowels).size === 1;
    });
}

function multiFilter(arr) {
    return arr.filter(obj => {
        const capital = obj.capital;
        const name = obj.name;
        const tag = obj.tag;
        const region = obj.region;

    return capital.length >= 8
        && !['a', 'e', 'i', 'o', 'u'].includes(name[0].toLowerCase())
        && tag.match(/[aeiou]/i)
        && region !== 'South';
    });
}
      
  
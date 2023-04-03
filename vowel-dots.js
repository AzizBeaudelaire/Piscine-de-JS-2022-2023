const vowels = /[aeiou]/gi;

const vowelDots = (str) =>{
    return str.replace(vowels,'$&.');
}

console.log(vowelDots('Salut les gens'));
function slice(input, start, end) {
    // Vérifier si l'entrée est une chaîne de caractères ou un tableau
    if (typeof input === 'string') {
      return input.slice(start, end);
    } else if (Array.isArray(input)) {
      return input.slice(start, end);
    } else {
      throw new Error('Input must be a string or an array.');
    }
}
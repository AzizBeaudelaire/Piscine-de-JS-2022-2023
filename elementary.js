// Fonction pour effectuer la multiplication
function multiply(a, b) {
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
      result += a;
    }
    return b < 0 ? -result : result;
}

// Fonction pour effectuer la division entière
function divide(a, b) {
    let quotient = 0;
    let divisor = Math.abs(b);
    let dividend = Math.abs(a);
    
    while (dividend >= divisor) {
      dividend -= divisor;
      quotient++;
    }

    return a < 0 && b < 0 || a > 0 && b > 0 ? quotient : -quotient;
}

// Fonction pour effectuer le modulo
function modulo(a, b) {
    let divisor = Math.abs(b);
    let dividend = Math.abs(a);
    
    while (dividend >= divisor) {
      dividend -= divisor;
    }
    
    return a < 0 ? -dividend : dividend;
}

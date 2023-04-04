function citiesOnly(arr) {
    return arr.map(obj => obj.city);
}

function upperCasingStates(arr) {
    return arr.map(function(str) {
        let words = [];
        let word = '';
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (char === ' ') {
                words.push(word);
                word = '';
            } else if (i === 0) {
                word += char.toUpperCase();
            } else {
                word += char;
            }
        }
        words.push(word);
        let capitalizedWords = [];
        for (let j = 0; j < words.length; j++) {
            let capitalizedWord = '';
            let capitalizedFirstChar = words[j][0].toUpperCase();
            capitalizedWord += capitalizedFirstChar;
            capitalizedWord += words[j].slice(1);
            capitalizedWords.push(capitalizedWord);
        }
        let capitalizedStr = '';
        for (let k = 0; k < capitalizedWords.length; k++) {
            capitalizedStr += capitalizedWords[k];
            if (k !== capitalizedWords.length - 1) {
                capitalizedStr += ' ';
            }
        }
        return capitalizedStr;
    });
}

function fahrenheitToCelsius(fTemps) {
    return fTemps.map(function(fTemp) {
        let fahrenheit = '';
        let celsius = '';
        for (let i = 0; i < fTemp.length; i++) {
            let char = fTemp[i];
            if (char >= '0' && char <= '9') {
                fahrenheit += char;
            }
        }
        let fTempNum = Number(fahrenheit);
        let cTempNum = Math.floor((fTempNum - 32) * 5 / 9);
        celsius += cTempNum;
        celsius += ' °C';
        return celsius;
    });
}
  
function trimTemp(objects) {
    return objects.map(function(obj) {
        let newObj = {};
        for (let key in obj) {
            if (key === 'temperature') {
                newObj[key] = obj[key].replace(/\s/g, '');
            } else {
                newObj[key] = obj[key];
            }
        }
    return newObj;
    });
}
  

function tempForecasts(objects) {
    return objects.map(function(obj) {
        const city = obj.city;
        const state = obj.state;
        const temperature = Math.round((parseInt(obj.temperature) - 32) * 5 / 9) + '°Celsius';
        return `${temperature} in ${city}, ${state.charAt(0).toUpperCase() + state.slice(1)}`;
    }); 
}
  
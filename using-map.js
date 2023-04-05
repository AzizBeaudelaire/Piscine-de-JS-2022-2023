function citiesOnly(array) {
    const map = array.map(v => v.city);
    return map;
}

function upperCasingStates(array) {
    return array.map(value => {
        return value.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    })
}

function fahrenheitToCelsius(array) {
    return array.map(value => {
        const degree = Math.floor((parseInt(value.replace(/°F/g, '')) - 32) * (5 / 9));
        return String(degree) + '°C';
    })
}

function trimTemp(array) {
    return array.map(value => {
        return {
            ...value,
            temperature: value.temperature.replace(/\s+/g, '')
        };
    });
}

function tempForecasts(array) {
    return array.map(value => {
        let temp = Math.floor((parseInt(value.temperature.replace(/°F/g, '')) - 32) * (5 / 9));
        temp = String(temp) + '°Celsius in ';
        const city = value.city.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
        const state = value.state.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
        return temp + city + ', ' + state;
    })
}
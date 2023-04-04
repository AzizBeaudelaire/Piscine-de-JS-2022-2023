const citiesOnly = arr => arr.map(obj => obj.city);

const upperCasingStates = arr => arr.map(str => str.replace(/\b\w/g, l => l.toUpperCase()));

const fahrenheitToCelsius = fTemps => fTemps.map(fTemp => Math.floor((Number(fTemp.match(/\d+/)) - 32) * 5 / 9) + ' °C');

const trimTemp = objects => objects.map(obj => ({...obj, temperature: obj.temperature.replace(/\s/g, '')}));

const tempForecasts = objects => objects.map(obj => `${Math.round((parseInt(obj.temperature) - 32) * 5 / 9)}°Celsius in ${obj.city}, ${obj.state.charAt(0).toUpperCase() + obj.state.slice(1)}`);

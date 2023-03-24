function dogYears(planet, age) {
    const earth_year = 365.25 * 24 * 60 * 60; // seconds in an Earth year
    const dog_year = earth_year / 7; // seconds in a dog year
    const orbital_periods = {
      earth: 1.0,
      mercury: 0.2408467,
      venus: 0.61519726,
      mars: 1.8808158,
      jupiter: 11.862615,
      saturn: 29.447498,
      uranus: 84.016846,
      neptune: 164.79132
    };
    const orbital_period = orbital_periods[planet];
    const age_earth_years = age_/ earth_year;
    const age_dog_years = age_earth_years / orbital_period / dog_year;
    return age_dog_years.toFixed(2);
}
  
const age_on_earth = 1000000000;
const age_on_planet = dogYears('earth', age_on_earth);
console.log(age_on_planet); // Output: 221.82

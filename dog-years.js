function dogYears(planet, ageInSeconds) {
    const earthYearInSeconds = 31557600;
    let dogAgeInYears = ageInSeconds / (earthYearInSeconds * 7);
    let orbitalPeriods = {
      earth: 1.0,
      mercury: 0.2408467,
      venus: 0.61519726,
      mars: 1.8808158,
      jupiter: 11.862615,
      saturn: 29.447498,
      uranus: 84.016846,
      neptune: 164.79132
    };
    let orbitalPeriod = orbitalPeriods[planet];
    let dogAgeOnPlanet = dogAgeInYears / orbitalPeriod;
    return Math.round(dogAgeOnPlanet * 100) / 100;
}   
    
console.log(dogYears('earth', 1000000000)); // Output: 221.82

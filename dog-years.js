function dogYears(planet, age) {
    const earthYears = age / 31557600;
    let dogYears = 0;
    
    switch(planet) {
      case 'earth':
        dogYears = earthYears / 7;
        break;
      case 'mercury':
        dogYears = earthYears / 0.2408467 / 7;
        break;
      case 'venus':
        dogYears = earthYears / 0.61519726 / 7;
        break;
      case 'mars':
        dogYears = earthYears / 1.8808158 / 7;
        break;
      case 'jupiter':
        dogYears = earthYears / 11.862615 / 7;
        break;
      case 'saturn':
        dogYears = earthYears / 29.447498 / 7;
        break;
      case 'uranus':
        dogYears = earthYears / 84.016846 / 7;
        break;
      case 'neptune':
        dogYears = earthYears / 164.79132 / 7;
        break;
      default:
        return 'Invalid planet name.';
    }
    
    return Math.round(dogYears * 100) / 100; // Round to 2 decimal places
}
  
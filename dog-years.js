function dogYears(planet, age) {
    const earthYears = age * 7;
    let dogYears = 0;
    
    switch(planet) {
        case 'earth':
          dogYears = earthYears;
          break;
        case 'mercury':
          dogYears = earthYears / 0.2408467;
          break;
        case 'venus':
          dogYears = earthYears / 0.61519726;
          break;
        case 'mars':
          dogYears = earthYears / 1.8808158;
          break;
        case 'jupiter':
          dogYears = earthYears / 11.862615;
          break;
        case 'saturn':
          dogYears = earthYears / 29.447498;
          break;
        case 'uranus':
          dogYears = earthYears / 84.016846;
          break;
        case 'neptune':
          dogYears = earthYears / 164.79132;
          break;
        default:
          return 'Invalid planet name.';
    }  
    return (dogYears*100) / 100;
}
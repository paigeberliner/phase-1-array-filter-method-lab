
function findMatching(drivers, string) {
    const matchingDrivers = [];
    for (const driver of drivers) {
      if (driver.toLowerCase() === string.toLowerCase()) {
        matchingDrivers.push(driver);
      }
    }
    return matchingDrivers;
  }

  function fuzzyMatch(drivers, string) {
    const firstLetter = [];
    for (const driver of drivers) {
      if (driver.startsWith(string)) {
        firstLetter.push(driver);
      }
    }
  
    return firstLetter;
  }

  function matchName(drivers, string, name) {
    const matchingObject = [];
    for (const driver of drivers) {
      if (driver.name === string) {
        matchingObject.push(driver);
      }
    }
    return matchingObject;
  }
  





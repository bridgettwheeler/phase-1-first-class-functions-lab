const returnFirstTwoDrivers = (driversArray) => {
    return driversArray.slice(0, 2)
}

const returnLastTwoDrivers = (driversArray) => {
    return driversArray.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return integer(fare)
}
function createFareMultiplier(num1) {
    return function (fare) { 
        return num1 * fare 
    }
  }

  const fareDoubler = (fare) => {
      let doubler = createFareMultiplier(2)
      return doubler(fare)
  }

  const fareTripler = (fare) => {
    let tripler = createFareMultiplier(3)
    return tripler(fare)
  }

  function selectDifferentDrivers(drivers, twoDriverFunction) {
      if (twoDriverFunction == returnFirstTwoDrivers) {
          return returnFirstTwoDrivers(drivers)
      } else if (twoDriverFunction == returnLastTwoDrivers) {
          return returnLastTwoDrivers(drivers)
      }
  }
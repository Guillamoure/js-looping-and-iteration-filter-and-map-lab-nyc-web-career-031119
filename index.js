// Code your solution here:
function driversWithRevenueOver(array, num) {
  return array.filter(driver => driver.revenue > num)
}

function driverNamesWithRevenueOver(array, num) {
  objs = array.filter(driver => driver.revenue > num);
  return objs.map(driver => driver.name)
}

function exactMatch(array, match){
  let key = Object.keys(match)
  return array.filter(driver => driver[key[0]] === match[key[0]])
}

function exactMatchToList(array, match) {
  let key = Object.keys(match)
  objs = array.filter(driver => driver[key[0]] === match[key[0]])
  return objs.map(driver => driver.name)
}

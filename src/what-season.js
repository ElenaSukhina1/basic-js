const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
let month
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  month = date.getMonth()
  if(date === undefined){
    return 'Unable to determine the time of year!'
  } else if((Object.prototype.toString.call(date) === '[Object Date]')){
    throw Error("Invalid date!")
  } 
  
  else if(month === 11 || month <= 1){
    return 'winter'
  } else if(month <=4){
    return 'spring'
  } else if(month <=7){
    return 'summer'
  } else if(month <= 10){
    return 'autumn (fall)'
  }
  }


module.exports = {
  getSeason
};

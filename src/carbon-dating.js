const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == 'string'){
    if (isNaN(parseFloat(sampleActivity))) {
      return false;
    }
    return false;
  }
  else return false;

  let sample = parseFloat(sampleActivity);
  
  let time = (0.693 * (15/sample))/ 0.000122;

  return Math.ceil(time);


};

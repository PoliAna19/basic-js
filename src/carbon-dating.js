const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(sampleActivity === false || sampleActivity === undefined || sampleActivity === null) return false;
  if(isNaN(+sampleActivity)) return false;
  if(typeof sampleActivity !== "string") return false;
  if(+sampleActivity <= 0 || +sampleActivity > 15) return false;
  let n = 0.693 / HALF_LIFE_PERIOD;
  let timeAct = (Math.log(MODERN_ACTIVITY / sampleActivity)) / n;
  return Math.ceil(timeAct);
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};

const leapYears = function(year) {
// year % 400 == 0 -- > true
// year % 100 == 0 --> false
// year % 4 == 0 --> true

  if ( (year % 4 == 0 && year % 100 != 0 ) || (year % 400 == 0) ) {
    return year % 4 == 0
  } else {
    return false
  }

};

module.exports = leapYears;

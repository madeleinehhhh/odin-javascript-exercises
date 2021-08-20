const sumAll = function( a, b ) {

  if ( Number(a)===a && Number(b)===b && a >= 0 && b >= 0 ) {

  let sum = 0;

  let min = 0;
  let max = 0;

  if ( a > b ) {
    min = b;
    max = a;
  } else if ( b > a ) {
    min = a;
    max = b;
  }

  while ( min <= max ) {
    sum += min
    min++
    }

    return sum
  } else {
    return 'ERROR'
  }

};

module.exports = sumAll;

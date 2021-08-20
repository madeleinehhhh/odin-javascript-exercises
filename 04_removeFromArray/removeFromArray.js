const removeFromArray = function(array, remove) {
  // first, we could do a loop that goes from zero to the length of the array
  // and each time through the loop it checks whether the remove is the same as the array child
  // if it is, it removes it, if it isn't, it carries on.

  for ( i=0; i<array.length; i++ ) {
    if ( remove == array[i] ) {
      array[i] = false;
    }
  }

  // then we remove blanks ("falses")
  return array.filter(Boolean)

};

module.exports = removeFromArray;

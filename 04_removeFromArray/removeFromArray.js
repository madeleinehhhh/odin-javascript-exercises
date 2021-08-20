const removeFromArray = function(list, ...itemsToRemove) {

  // first first we have to make "remove" into an array
  // then we need a big loop to run everything else for each element of the array remove

  for ( j=0; j < itemsToRemove.length ; j++ ) {

      // first, we could do a loop that goes from zero to the length of the array
      // and each time through the loop it checks whether the remove is the same as the array child
      // if it is, it removes it, if it isn't, it carries on.

      for ( i=0; i < list.length ; i++ ) {
        if ( itemsToRemove[j] === list[i] ) {
          list[i] = false;
        }
      }


    }
      // then we remove blanks ("falses")
      return list.filter(Boolean)

  };

module.exports = removeFromArray;

const repeatString = function(string, num) {
    if ( num < 0 ) {
        return "ERROR";
    }
    let stringReturn = '';
    for (num; num>0; num--) {
        stringReturn += string;
    }
    return stringReturn;
};

module.exports = repeatString;

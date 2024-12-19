const leapYears = function(year) {
    //check if year divisible by four
    //if true, check if divisible by 100, if it is 
    // --> not leap year, unless divisible by 400

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            else {
                return false;
            }

        }
        else {
            return true;
        }
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;

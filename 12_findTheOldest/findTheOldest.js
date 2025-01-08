const findTheOldest = function(arr) {
    arrSorted = arr.sort(function(a, b) {
        const currentDate = new Date();
        if (a.yearOfDeath == undefined) {
            a.yearOfDeath = currentDate.getFullYear();
        }
        if (b.yearOfDeath == undefined) {
            b.yearOfDeath = currentDate.getFullYear();
        }
        
        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;
        return bAge - aAge;
    });
    return arrSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;

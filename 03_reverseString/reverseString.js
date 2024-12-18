const reverseString = function(string) {
    const array = string.split("");
    const arrayReversed = array.reverse();
    let reversedString = arrayReversed.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

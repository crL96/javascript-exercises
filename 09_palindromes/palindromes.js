const palindromes = function (str) {
    const strLower = str.toLowerCase();

    //filter to only include alphanumerical
    const strFiltered = strLower
        .split("")
        .filter(character => "abcdefghijklmnopqrstuvwxyz0123456789".includes(character))
        .join("");

    const strReverse = strFiltered.split("").reverse().join("");
    return (strFiltered === strReverse);
};

console.log(palindromes("bat"));

// Do not edit below this line
module.exports = palindromes;

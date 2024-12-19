const sumAll = function(n1, n2) {
    if (n1 < 0 || n2 < 0 || 
        (!(Number.isInteger(n1))) || (!(Number.isInteger(n2))) ||
        (!(typeof(n1) == "number")) || (!(typeof(n2) == "number"))
        ) {
        return "ERROR";
    }

    let sum = 0;
    let m1 = n1;
    let m2 = n2;

    if (n1 > n2) {
        m1 = n2;
        m2 = n1;
    }

    for (m1; m1 <= m2; m1++) {
        sum += m1;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;

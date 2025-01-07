const fibonacci = function(a) {
    a = Number(a);
    if (a < 0) {
        return "OOPS";
    }
    else if (a == 0) {
        return 0;
    }
    else {
        let fibo = [1, 1]
        for (let i = 2; i < a; i++) {
            nextNum = fibo[(i-2)] + fibo[(i-1)];
            fibo.push(nextNum);
        }
        return fibo[(a-1)];
}

};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;

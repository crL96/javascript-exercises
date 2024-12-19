const removeFromArray = function(array, ...args) {
    let newArray = [];
        for (let i = 0; i < array.length; i++ ) {
            if (!(args.includes(array[i]))) {
                newArray.push(array[i]);
            }
        }
    return newArray;
};

console.log(removeFromArray([1, 2, 3, 2], 2))

// Do not edit below this line
module.exports = removeFromArray;




//const removeFromArray = function(array, remove) {
//    for (let i = 0; i < array.length; i++ ) {
//        if (array[i] === remove) {
//            array.splice(i, 1);
//        }
//    }
//    return array;
//};

"use strict";
function zipList(listOne, listTwo) {
    let result = [];
    const length = Math.min(listOne.length, listTwo.length);
    for (let i = 0; i < length; i++) {
        result.push(listOne[i]);
        result.push(listTwo[i]);
    }
    return result;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
function zipListTheFunctionalWay(listOne, listTwo) {
    return listOne
        .reduce((acc, current, index) => {
        return acc.concat(current, listTwo[index]);
    }, [])
        .filter((item) => item !== undefined);
}
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));

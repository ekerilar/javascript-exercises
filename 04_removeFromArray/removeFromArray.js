function removeFromArray(initialArray, ...valuesToRemove) {
    let newArray = initialArray.filter(item => !valuesToRemove.includes(item));
    return newArray;
}

    
// Do not edit below this line
module.exports = removeFromArray;

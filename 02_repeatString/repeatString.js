const repeatString = function(inputString, numberTimes) {
    let returnString = '';

    if(numberTimes < 0){
        return "ERROR";
    }

    for(let i = 1; i <= numberTimes; i++){
       returnString = returnString.concat(inputString);
    }
    return returnString;

};

// Do not edit below this line
module.exports = repeatString;

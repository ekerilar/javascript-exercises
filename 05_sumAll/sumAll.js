const sumAll = function(number1, number2) {
    let diff = 0;
    let sum = 0;

    if(number1 < 0 || number2 < 0 
        || typeof number1 !== 'number' || typeof number2 !== 'number'
        || !Number.isInteger(number1) || !Number.isInteger(number2)
    ){
        return "ERROR";
    }

    if(number1 > number2){
        diff = number1 - number2;
    } else {
        diff = number2 - number1;
    }

    for (let i = 0; i <= diff + 1; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
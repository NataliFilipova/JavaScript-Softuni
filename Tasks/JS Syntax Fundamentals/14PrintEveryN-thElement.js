function printEveryNthElement(numbers, n){
    let nelements = [];
    for(let i = 0; i < numbers.length; i += n){
        nelements.push(numbers[i]);
    }
    return nelements
}

printEveryNthElement(['5', '20','31','4','2'], 2);
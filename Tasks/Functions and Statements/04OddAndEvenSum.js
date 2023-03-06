function OddAndEvenSum(number){
    let numberAsString = number.toString();
    let oddSum = 0;
    let evenSum = 0;
    numberAsString.array.forEach(element => {
        if(Number(element)% 2 == 0){
            evenSum += Number(element);
        }
        else{
            oddSum += Number(element);
        }
    });

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

OddAndEvenSum(1000435);
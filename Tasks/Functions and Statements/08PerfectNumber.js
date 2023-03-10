function perfectNumber(number){
    let divisors = [];
    for(let i = 1; i <= number/2; i++){
        if(number % i === 0){
            divisors.push(i);
        }
    }

    let sum = divisors.reduce((a,b) => a + b, 0);

    if(sum === number){
        console.log(`We have a perfect number!`);
    }
    else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);
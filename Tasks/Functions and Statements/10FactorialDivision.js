function factorialDivision(numberOne, numberTwo){
    function factorial(number){
        let sum = 1;
        for(let i = 2; i <= number; i++){
            sum *= i;
        }
        return sum;
    }

    let factOfNumberOne = factorial(numberOne);
    let factOfNumberTwo = factorial(numberTwo);

    console.log(`${(factOfNumberOne/factOfNumberTwo).toFixed(2)}`);
}
factorialDivision(5,2);
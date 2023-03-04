function sameNumber(number){
    let numberAsString = number.toString();

    let sum = 0;

    let firstchar = numberAsString.charAt(0);

    let flag = 'true';

    for(const digitAsString of numberAsString){
        let digit = Number(digitAsString);

        sum += digit;

        if (digitAsString != firstchar){
            flag  = 'false';
            
        }
        
    }
    console.log(flag);
    console.log(sum);
}
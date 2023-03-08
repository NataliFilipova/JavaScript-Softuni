function isPalindrome(number){
    for (const numberr of number.toString().split(',')) {
        let numberAsString = numberr.toString();
        let flag = true;
        for(let i = 0; i <= numberAsString.length/2; i++){
            if(Number(numberAsString[i] )!== Number(numberAsString[numberAsString.length -1-i])){
                flag = false;
                break;
            }
        }
        if(flag == true){
            console.log(`true`);
        }
        else{
            console.log(`false`);
        }
    }
}

isPalindrome([123,323,421,121]);
function isPalindrome(number){
    let numberAsString = number.toString();
    let flag = true;
    for(let i = 0; i <= (numberAsString.length)/2; i++){
        if(numberAsString[i] != numberAsString.length -i ){
            flag = false;
        }
    }
    if(flag == true){
        console.log(`true`);
    }
    else{
        console.log(`false`);
    }
}
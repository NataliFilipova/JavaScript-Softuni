function isPasswordValid(password){
    let flag = true;
    if(password.length < 6 || password.length >10){
        console.log(`Password must be between 6 and 10 characters`);
       flag = false;
    }
  
    for(let i = 0; i < password.length; i++){
        if(isLetter(password[i]) == false && isNumber(password[i])=== false){
            console.log(`Password must consist only of letters and digits`);
            flag= false;
            break;
        }
    }
    function isNumber(i) {
        return (i >= '0' && i <= '9');
    }
    
    function isLetter(i) {
        return ((i >= 'a' && i <= 'z') || (i >= 'A' && i <= 'Z'));
    }
    let coundofDigits = 0;
    for(let i = 0; i < password.length; i++){
        if(isNumber(password[i])){
            coundofDigits++;
        }
    }
    if(coundofDigits < 2){
        flag= false;
        console.log(`Password must have at least 2 digits`);
    }

    if(flag === true){
        console.log(`Password is valid`);
    }
}

isPasswordValid(`logIn`);
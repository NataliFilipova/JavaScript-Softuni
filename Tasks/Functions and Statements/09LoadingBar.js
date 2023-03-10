function loadingBar(number){
    let percentage = number/10;
    let string = [];

    if(percentage !== 10){
        for(let index = 0; index < percentage; index++){
            string.push('%');
        }
        for(let index = 0; index < 10 - percentage; index++){
            string.push('.');
        }
        console.log(`${number}% [${string.join('')}]\nStill loading...`);
    }
    else{
        console.log(`100% Complete!\n[${string.join('')}]`);
    }
}
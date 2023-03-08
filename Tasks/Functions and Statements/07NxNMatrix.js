function printAMatrix(number){

    for(let i = 0; i < number; i++){
        let rowString = []
        for(let j = 0; j < number; j++){
            rowString.push(number);
        }
        console.log(rowString.join(' '));
    }
}

printAMatrix(6);
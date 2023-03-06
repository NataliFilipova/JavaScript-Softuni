function charactersInRange(a,b){
    let asciiCodea = a.charCodeAt(0);
    let asciiCodeb = b.charCodeAt(0);

    if (asciiCodeb <   asciiCodea){
        let c =  asciiCodea;
        asciiCodea = asciiCodeb;
        asciiCodeb = c;
    }

    let array = [];
    for (let index = asciiCodea + 1; index < asciiCodeb; index++) {
        array.push(String.fromCharCode(index));
    }
    console.log(array.join(' '));
}

charactersInRange('a','d');
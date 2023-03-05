function charactersInRange(a,b){
    let asciiCodea = letter.charCodeAt(a)
    let asciiCodeb = letter.charCodeAt(b)

    if (b >  a){
        let c = a;
        a = b;
        b = c;
    }

    for(let i = a; i <= b; i++){
        console.log(ascicode[i]);
    }
}
function PascalCaseSplitter(text) {
    let result = '';
    for (const letter of text) {
        let asciiCode = letter.charCodeAt(letter)
        if (asciiCode >= 65 && asciiCode <= 90) {
            if (result.length > 0) {
                result += ', ';
            }
            result += letter;
        }
        else {
            result += letter;
        }
    }
    console.log(result);
}
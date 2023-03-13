function towns(input){
    let object = {};
    for(const word of input){
        let texts = word.split(' | ');
        object.town = texts[0];
        object.latitude = Number(texts[1]).toFixed(2);
        object.longitude = Number(texts[2]).toFixed(2);
        console.log(object);
    }
}
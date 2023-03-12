function cityInfo (city){
    let keys = Object.keys(city);
    for(const key of keys){
        console.log(`${key} -> ${city[key]}`);
    }
}


function cityInfo (city){
    let tuples = Object.entries(city);
    for(const [key, value] of tuples){
        console.log(`${key} -> ${value}`);
    }
}
function makeADictionary(input){
    let obj = {};
    for (const item of input) {
        let itemObj = JSON.parse(item);
        let arr = Object.entries(itemObj);
        for (const [term, definition] of arr) {
            obj[term] = definition;
        }
    }

    let array = Object.entries(obj);   
    let sorted = array.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [term, definition] of sorted) {
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}
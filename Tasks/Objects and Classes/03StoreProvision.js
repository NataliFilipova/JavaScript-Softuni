function storeProvision(currentStock, orderedStock){

    let combined = [...currentStock, ...orderedStock];
    let store = {};
        
    for(let index = 0; index< combined.length;index++){
        let prop = combined[index];
        if(index % 2 === 0){
            if(!store.hasOwnProperty(prop)){
                store[prop] = 0;
            }
        } else {
            value = Number(prop);
            let previousProp = combined[index-1];
            store[previousProp] += value;
        }
    }
    for(const key in store){
        console.log(`${key} -> ${store[key]}`)
    }
}
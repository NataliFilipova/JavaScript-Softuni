function addressBook(input){
    let addressBook = {};

    for(const line of input){
        let[name, address] = line.split(':');
        addressBook[name] = address;
    }
    let sortedNames = Object.keys(addressBook)
    .sort((nameA, nameB) => nameA.localeCompare(nameB));

    for(const key of sortedNames){
        console.log(`${key} -> ${addressBook[key]}`);
    }
    
}
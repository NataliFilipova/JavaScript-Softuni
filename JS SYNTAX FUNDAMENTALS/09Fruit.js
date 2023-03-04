function fruit(typeOfFruit, grams, kilogram){
    let price = grams/1000 * kilogram

    console.log(`I need $${price.toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${typeOfFruit}.`);
}
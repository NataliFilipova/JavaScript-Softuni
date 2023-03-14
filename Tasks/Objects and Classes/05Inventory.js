function inventory(input){
    let heroes = [];

    for(const line of input){
        let[hero, level, items] =line.split(' / ');
        level = Number(level);
        heroes.push({hero,level, items});

    }

    let sortedHerows = heroes.sort((heroA, heroB) => heroA.level - heroB.level);

    for(const {hero, level, items} of sortedHeroes){

    }
        
}


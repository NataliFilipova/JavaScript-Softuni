function wordsTracker(input){
    let words = input[0].split(' ');
    let text = input.splice(1);
    let obj = {};

    for(const word of words){
        let foundwords = text.filter(x => x === word).length;
        obj[word] = foundwords;
    }

    let sortedWords = Object.entries(obj)
    .sort((wordA,wordB) => {
        let [nameA, countA] = wordA;
        let [nameB, countB] = wordB;
        
        return countB-countA;
    });

    for(const [word, count] of sortedWords){
        console.log(`${word} - ${count}`);
    }
}

wordsTracker([
    'this sentence',
'In', 'this', 'sentence', 'you', 'have',
'to', 'count', 'the', 'occurrences', 'of',
'the', 'words', 'this', 'and', 'sentence',
'because', 'this', 'is', 'your', 'task'
]);
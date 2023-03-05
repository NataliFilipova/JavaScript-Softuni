function stringSubstring(word, text) {
    for (const part of text.split(' ')) {
        if (part.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            return;
        }
    }
 console.log(`${word} not found!`)
}

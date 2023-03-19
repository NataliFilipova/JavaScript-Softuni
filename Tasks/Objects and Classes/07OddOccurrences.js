function oddOccurences(sentence){
    
    let text = sentence.split(" ");

    text = text.map(element => {
        return element.toLowerCase();
      });

    let oddwords = [];


    for(let i = 0; i < text.length; i++){
        let count = 0;
        for(let j = 0; j < text.length; j++){
            if(text[i] === text[j]){
           
                count++;
               
            }
        }
        if(count % 2 !== 0 && (oddwords.includes(text[i],0) === false)){

            oddwords.push(text[i].toLowerCase());
        }
        
    }

    console.log(oddwords.join(' '));
}

oddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
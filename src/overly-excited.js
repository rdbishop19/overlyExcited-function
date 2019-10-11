// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

const addExcitement = (theWordArray, string="!", repeat=1, position=3) => {
    /* 
    Rewrite as arrow function
    */
       
    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    let repeatChar = ""
    for (let i = 0; i < repeat; i++){
        repeatChar += string;
    }
    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        if ((i + 1) % position === 0){
            buildMeUp += `${theWordArray[i]}${repeatChar} `;
        }
        else {
            buildMeUp += `${theWordArray[i]} `;
        }
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }
    
}

// Invoke the function and pass in the array
// addExcitement(sentence) // no second argument, defaults to "!"

// I want to use a question mark
// addExcitement(sentence, "?") // second argument declared, will use instead of default "!"

// I want to use a 4 asterisks
// addExcitement(sentence, "*", 4);

// I want to specify at what position the added punctuation is input
addExcitement(sentence, "*", 4);
addExcitement(sentence, "*", 4, 2);
addExcitement(sentence, "*", 2, 1);
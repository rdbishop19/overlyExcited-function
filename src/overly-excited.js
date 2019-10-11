// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, string="!") {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /* 
        Add a new argument to the function so that a developer can specify 
        which character should be displayed instead of it always being an exclamation point.
         */
        // Concatenate the new word onto buildMeUp
        if ((i + 1) % 3 === 0){
            buildMeUp += `${theWordArray[i]}${string} `
        }
        else {
            buildMeUp += `${theWordArray[i]} `;
        }
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}

// Invoke the function and pass in the array
addExcitement(sentence) // no second argument, defaults to "!"

// I want to use a question mark
addExcitement(sentence, "?") // second argument declared, will use instead of default "!"
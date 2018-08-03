
var mountains = ["grays", "torreys", "evans", "bierstadt", "democrat", "lincoln", "bross", "missouri", "oxford", "belford"];
var wins = 0;
var hiddenWord = [];
var guessesRemaining = 12;
var guessedAlready = [];
var loses = 0;
var randomWord= "";

		
    
    



function launchGame() {
    
    randomWord = mountains[Math.floor(Math.random() * mountains.length)];
    hiddenWord = [];
    for (i=0; i<randomWord.length; i++) {
        hiddenWord[i] = " _ ";
    }

    //to populate the variables to the html
    document.getElementById("attempts").innerHTML = guessesRemaining;
    document.getElementById("winCounter").innerHTML = wins;
    document.getElementById("wrongLetters").innerHTML = guessedAlready;
    document.getElementById("lossCounter").innerHTML = loses;
    document.getElementById("guessWord").innerHTML = hiddenWord.join(" ");
    console.log(randomWord);  //test
}

function checkUserGuess (userGuess) {
    console.log(userGuess)
    // for (var j=0; j<randomWord.length; j++) {
    //     if (randomWord[j] === userGuess) {
    //             hiddenWord[j] = userGuess;
            
    //     } else {
    //         guessedAlready.push(userGuess);
    //         guessesRemaining--;
    //     }
    // }

    randomIndex = randomWord.indexOf(userGuess); 
    console.log(randomIndex);

    if (randomIndex === -1) {
        guessesRemaining--;
        guessedAlready.push(userGuess);
    } 
    if (randomIndex !== -1) {
        hiddenWord[randomIndex]=userGuess;
    }
    console.log(hiddenWord);
    // attention look up isArray and indexOf stuff

    document.getElementById("attempts").innerHTML = guessesRemaining;
    document.getElementById("wrongLetters").innerHTML = guessedAlready;
    document.getElementById("guessWord").innerHTML = hiddenWord.join(" ");
}

    

launchGame(); 
    
document.onkeyup = function(event) {
    
    var userGuess = event.key.toLowerCase();
      console.log('click');
     
    checkUserGuess(userGuess);
    
}



       

      



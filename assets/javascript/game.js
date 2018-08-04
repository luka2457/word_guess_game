
var mountains = ["grays", "torreys", "evans", "bierstadt", "democrat", "lincoln", "bross", "missouri", "oxford", "belford"];
var wins = 0;
var hiddenWord = [];
var guessesRemaining = 12;
var guessedAlready = [];
var loses = 0;
var randomWord = "";
var possibleGuesses = "abcdefghijklmnopqrstuvwxyz";


function launchGame() {

    randomWord = mountains[Math.floor(Math.random() * mountains.length)];
    hiddenWord = [];
    guessesRemaining = 12;
    guessedAlready = [];

    for (i = 0; i < randomWord.length; i++) {
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

function checkUserGuess(userGuess) {
    console.log(userGuess);

    possibleIndex = possibleGuesses.indexOf(userGuess); // to ensure only letter are guessed
    randomIndex = randomWord.indexOf(userGuess);    //ID's  >=0 means the userGuess is in the random word....-1=not
    randomIndex2 = randomWord.lastIndexOf(userGuess); //This is b/c some of the mountain names have more then one of the same character in their string
    guessedIndex = guessedAlready.indexOf(userGuess); //So you can't guess more than once

    if (possibleIndex !== -1) { //only can guess letters
        if (randomIndex === -1) { //if wrong letter guess
            if (guessedIndex === -1) { //
                guessesRemaining--;
                guessedAlready.push(userGuess);
            }
        }
        if (randomIndex !== -1) {
            hiddenWord[randomIndex] = userGuess;  //places userGuess in blank spot
            hiddenWord[randomIndex2] = userGuess; //b/c some mountains have 2< of the same characters
        }
    }

    document.getElementById("attempts").innerHTML = guessesRemaining; // these innerHTML's are to enter the userGuess to the html
    document.getElementById("wrongLetters").innerHTML = guessedAlready;
    document.getElementById("guessWord").innerHTML = hiddenWord.join(" ");
}

function winOrLose() {
    checkWin = hiddenWord.includes(" _ ");
    
    if (checkWin === false) {
        wins++;
        alert("Your climbing " + randomWord + " today!")
        launchGame();  
    }
    else if (guessesRemaining <= 0) {
        loses++;
        alert("No 14er for you!");
        launchGame();  
    }
}


launchGame(); // for the first launch

document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();
   

    checkUserGuess(userGuess);
    winOrLose();

}

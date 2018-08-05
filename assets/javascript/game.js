//variables 
var mountains = ["grays", "torreys", "evans", "bierstadt", "democrat", "lincoln", "bross", "missouri", "oxford", "belford"];
var wins = 0;
var hiddenWord = ["Press any key to start!"];
var guessesRemaining = 12;
var guessedAlready = [];
var loses = 0;
var randomWord = "";
var possibleGuesses = "abcdefghijklmnopqrstuvwxyz";
var upperCaseAnswer = "";

//functions
function launchGame() {
    randomWord = mountains[Math.floor(Math.random() * mountains.length)];
    hiddenWord = [];
    guessesRemaining = 12;
    guessedAlready = [];
    upperCaseAnswer = randomWord.charAt(0).toUpperCase() + randomWord.substr(1);
    
    for (i = 0; i < randomWord.length; i++) {
        hiddenWord[i] = " _ ";
    }
    //To populate image of the mountain being guessed
    if (randomWord === mountains[0]) { //grays pic
        document.getElementById("hint").innerHTML = '<img src="assets/images/grays.jpg" class="img-fluid" alt="grays">';
    }
    if (randomWord === mountains[1]) { //torreys pic
        document.getElementById("hint").innerHTML = '<img src="assets/images/torreys.jpg" class="img-fluid" alt="torreys">';
    }
    if (randomWord === mountains[2]) { //evans pic
        document.getElementById("hint").innerHTML = '<img src="assets/images/evans.jpg" class="img-fluid" alt="evans">';
    }
    if (randomWord === mountains[3]) { //bierstadt pic
        document.getElementById("hint").innerHTML = '<img src="assets/images/bierstadt.jpg" class="img-fluid" alt="bierstadt">';
    }
    if (randomWord === mountains[4]) { //democrat pic
        document.getElementById("hint").innerHTML = '<img src="assets/images/democrat.jpg" class="img-fluid" alt="democrat">';
    }
    if (randomWord === mountains[5]) { //lincoln pic
        document.getElementById("hint").innerHTML = '<img src="assets/images/lincoln.jpg" class="img-fluid" alt="lincoln">';
    }
    if (randomWord === mountains[6]) { //bross pic
        document.getElementById("hint").innerHTML = '<img src="assets/images/bross.jpg" class="img-fluid" alt="bross">';
    }
    if (randomWord === mountains[7]) { //missouri pic
        document.getElementById("hint").innerHTML = '<img src="assets/images/missouri.jpg" class="img-fluid" alt="missouri">';
    }
    if (randomWord === mountains[8]) { //oxford pic
        document.getElementById("hint").innerHTML = '<img src="assets/images/oxford.jpg" class="img-fluid" alt="oxford">';
    }
    if (randomWord === mountains[9]) { //belford pic
        document.getElementById("hint").innerHTML = '<img src="assets/images/belford.jpg" class="img-fluid" alt="belford">';
    }
    
    //to populate the variables to the html
    document.getElementById("attempts").innerHTML = guessesRemaining;
    document.getElementById("winCounter").innerHTML = wins;
    document.getElementById("wrongLetters").innerHTML = guessedAlready;
    document.getElementById("lossCounter").innerHTML = loses;
    document.getElementById("guessWord").innerHTML = hiddenWord.join(" ");
}

function checkUserGuess(userGuess) {
    possibleIndex = possibleGuesses.indexOf(userGuess); // to ensure only letter are guessed
    randomIndex = randomWord.indexOf(userGuess);    //ID's  >=0 means the userGuess is in the random word....-1=not
    randomIndex2 = randomWord.lastIndexOf(userGuess); //This is b/c some of the mountain names have more then one of the same character in their string
    guessedIndex = guessedAlready.indexOf(userGuess); //So you can't guess more than once

    if (possibleIndex !== -1) { //only can guess letters
        if (randomIndex === -1) { //if wrong letter guessed
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
        alert("Your climbing " + upperCaseAnswer + " today!")
        launchGame();
    }
    else if (guessesRemaining <= 0) {
        loses++;
        alert("No 14er for you!");
        launchGame();
    }
}

//call to functions and run game on key press
document.getElementById("guessWord").innerHTML = hiddenWord//display's "press key to start game"
document.onkeyup = function (pressToStart) { //starts game
    console.log("working");
    launchGame();
    document.onkeyup = function (event) {
        var userGuess = event.key.toLowerCase();
        checkUserGuess(userGuess);
        winOrLose();
    }
}


var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


var newGuessesLeft = function() {

    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var newLetterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var newGuessesSoFar = function() {

    document.querySelector('#sofar').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    newLetterToGuess();
    newGuessesLeft();
    newGuessesSoFar();
}

newLetterToGuess();
newGuessesLeft();



document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess);
    newGuessesLeft();
    newGuessesSoFar();

    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("Congrats, you are psychic!");

            reset();
        }
    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Sorry, you're not psychic?");

        reset();
    }
};
"use strict";

let secret = Math.floor((Math.random() * 20) + 1),
    guess;

while (guess !== secret) {
    guess = parseInt(prompt("Please guess the secret number (1-20)"));
    if (guess !== secret) {
        if (guess < secret) {
            alert("Incorrect, too low");
        } else {
            alert("Incorrect, too high");
        }
    }
}
alert("Correct Guess!");

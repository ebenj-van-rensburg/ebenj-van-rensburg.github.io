"use strict";

function pickWord() {
    let words = [
        "javascript",
        "monkey",
        "amazing",
        "pancake",
        "teacher",
        "wolf",
        "tree",
        "atomic",
        "crazy",
        "wonderful",
        "energetic",
        "silly",
        "jazz"
    ]
    return words[Math.floor(Math.random() * words.length)]
}

function answerArraySetup() {
    for (let i = 0; i < word.length; ++i) {
        answerArray.push("_");
    }
    return answerArray;
}

function updateGameState() {
    guess = guess.toLowerCase();
    correctGuesses = 0;
    alreadyGuessed = false
    for (let i = 0; i < word.length; ++i) {
        if (word[i] === guess) {
            if (answerArray[i] === "_") {
                answerArray[i] = guess;
                correctGuesses++;
            } else {
                alreadyGuessed = true;
                return;
            }
        }
    }
    return correctGuesses;
}

function checkGuessState() {
    if (correctGuesses > 0) {
        remainingLetters -= correctGuesses;
    } else if (alreadyGuessed === true) {
        alert(`Lives: ${lives}\n${userName}, you already guessed: ${guess}`);
    } else {
        lives--;
    }
}

let userName = prompt("Enter your name: "),
    word = pickWord(),
    answerArray = [],
    remainingLetters = word.length,
    guess,
    correctGuesses = 0,
    alreadyGuessed,
    lives = 5;

answerArraySetup();

console.log(word);

if (userName != null) {
    while (remainingLetters > 0 && lives > 0) {
        alert(`Lives: ${lives}\nHangman: ${answerArray.join(" ")}`);
        guess = prompt(`Lives: ${lives}\nGuess a letter:`);
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert("Please enter a single letter.");
        } else {
            correctGuesses = updateGameState(guess, word, answerArray);
            checkGuessState();
        }
    }
    if (guess === null) {
        alert(`Sorry to see you leave ${userName}.\nThe word was: ${word}`);
    } else if (remainingLetters === 0) {
        alert(`Congrats ${userName}!\nYou guessed the word: ${word}`);
    } else if (lives === 0) {
        alert(`Sorry ${userName}, you ran out of guesses.\nThe word was: ${word}`);
    } else {
        alert(`${userName}, something went seriously wrong. Please reload the page.`)
    }
} else {
    alert("We'll play next time, stranger!");
}

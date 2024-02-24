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

function showPlayerProgress() {
    alert(`Hangman: ${answerArray.join(" ")}`);
}

function getGuess() {
    let guess = prompt("Guess a letter");
    return guess.toLowerCase();
}

function updateGameState() {
    let correctGuesses = 0
    for (let i = 0; i < word.length; ++i) {
        if (word[i] === guess) {
            if (answerArray[i] === "_") {
                answerArray[i] = guess;
                correctGuesses++
            }
        }
    } return correctGuesses;
}

function showAnswerAndCongratPlayer() {
    alert(`Congrats player!\nYou guessed the word: ${answerArray.join("")}`)
}

let word = pickWord(),
    answerArray = [],
    remainingLetters = word.length
    guess;

answerArraySetup();

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        let correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratPlayer(answerArray);

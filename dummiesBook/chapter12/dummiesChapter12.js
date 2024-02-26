"use strict";

let trainSpeed = 50,
    trainPosition = -200,
    animation,
    train = document.getElementById("train"),
    trainAlert = document.getElementById("alert"),
    stopButton = document.getElementById("stopButton");

train.addEventListener("click", speedUp)
stopButton.onclick = stopTrain;

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    if (trainSpeed === 0) {
        trainSpeed = 50;
    }
    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);
    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + "px";
        checkPosition(trainPosition);
    }
}

function stopTrain() {
    if (trainPosition < 200) {
        trainPosition = -200;
        trainSpeed = 0;
        trainAlert.innerHTML = "Nice! You stopped the train";
        clearInterval(animation);
    }
}

function checkPosition() {
    if (trainPosition === 200) {
        trainPosition = -200;
        trainSpeed = 0;
        trainAlert.innerHTML = "CRASHED!";
        clearInterval(animation);
    }
}
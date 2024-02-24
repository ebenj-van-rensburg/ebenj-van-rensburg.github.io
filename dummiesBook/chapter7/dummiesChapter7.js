"use strict";

// document.getElementById("head").style.transform = "rotate(345deg)";

// document.getElementById("body").style.border = "4px solid #000000";

// document.getElementById("body").style.borderRadius = "4px";

// document.getElementById("leftarm").style.backgroundColor = "#FF00FF";

// document.getElementById("body").style.color = "#FF0000";

document.getElementById("head").style.borderTop = "5px black solid";

document.getElementById("nose").style.borderRadius = "45%";

// document.getElementById("rightarm").style.backgroundColor = "green";

document.getElementById("mouth").style.border = "4px black solid";

let rightEye = document.getElementById("righteye"),
    leftEye = document.getElementById("lefteye"),
    rightArm = document.getElementById("rightarm"),
    leftArm = document.getElementById("leftarm"),
    head = document.getElementById("head"),
    mouth = document.getElementById("mouth"),
    nose = document.getElementById("nose");
rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
rightArm.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", swing360Deg);
rightEye.addEventListener("click", changeRColor);
leftEye.addEventListener("click", changeRColor);
nose.addEventListener("click", noseMoveLeft);
mouth.addEventListener("click", sideRock);

function moveUpDown(e) {
    let robotPart = e.target,
        top = 0,
        id = setInterval(frame, 30);
    function frame() {
        robotPart.style.top = top++ + '%';
        if (top > 20) {
            top = 0;
            // setInterval(id);
        }
    }
}

function noseMoveLeft(e) {
    let robotPart = e.target,
        left = 50,
        id = setInterval(frame, 30);
    function frame() {
        robotPart.style.left = left-- + '%';
        if (left < 30) {
            left = 70;
            // setInterval(id);
        }
    }
}

function swing360Deg(e) {
    let robotPart = e.target,
        transform = 0,
        id = setInterval(frame, 10);
    function frame() {
        robotPart.style.transform = "rotate(" + transform++ + 'deg)';
        if (transform > 360) {
            transform = 0;
            // setInterval(id);
        }
    }
}

function changeRColor(e) {
    let robotPart = e.target,
        backgroundColor = 0,
        id = setInterval(colorShift, 10);
    function colorShift() {
        robotPart.style.backgroundColor = "rgb(" + backgroundColor++ + ", 0, 0)";
        if (backgroundColor > 254) {
            // setInterval(id);
            backgroundColor = 0;
            robotPart.style.backgroundColor = "rgb(" + backgroundColor + ", 0, 0)";
        }
    }
}

function sideRock(e) {
    let robotPart = e.target,
        transform = 0,
        id = setInterval(frame, 25);
    function frame() {
        robotPart.style.transform = "rotate(" + transform++ + 'deg)';
        
        if (transform > 25) {
            // setInterval(id);
            transform = 0;
        }
    }
}
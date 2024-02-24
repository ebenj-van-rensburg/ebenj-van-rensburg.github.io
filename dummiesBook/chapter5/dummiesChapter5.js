"use strict";

function changeHeaderMyName() {
    document.getElementById("myName").innerHTML = prompt("Enter your name: ")
}

function updateItemByID(item, thisID) {
    document.getElementById(thisID).innerHTML = item;
}

function changeTierList(tier) {
    for (let i = 0; i < 3; i++) {
        let item = prompt(`Change number ${i} of the ${(tier).toUpperCase()}-List: `);
        let thisID = (tier + "Tier" + i);
        updateItemByID(item, thisID);
    }
}

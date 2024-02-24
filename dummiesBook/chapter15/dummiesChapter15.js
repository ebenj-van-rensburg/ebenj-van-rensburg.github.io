"use strict";

let todaysDate = document.getElementById("todaysdate"),
    whatToDo = document.getElementById("whattodo"),
    d = new Date();

whatToDo.onclick = displayThingToDo;
displayDate();

function displayDate() {
    todaysDate.innerHTML = d.toDateString ();
}

function displayThingToDo() {
    let dayOfWeek = d.getDay(),
        youShould;
    switch (dayOfWeek) {
        case 0:
            youShould = "Time for Church!";
            break;
        case 1:
            youShould = "Monday, kick off the week with some coding!";
            break;
        case 2:
            youShould = "Tuesday, take a hike in the afternoon to cool off.";
            break;
        case 3:
            youShould = "Wednesday, halfway through the week, take a morning swim.";
            break;
        case 4:
            youShould = "Thursday, have yummy granola yoghurt for breakfast!";
            break;
        case 5:
            youShould = "Friday! Make it through today, and you can chill out!";
            break;
        case 6:
            youShould = "Saturday, zen morning and some afternoon gaming.";
            break;
        default:
            youShould = "Error, bad date returned";
            break;
    }
    document.getElementById("thingToDo").innerHTML = youShould;
}




// let favWeekDay = prompt("Enter your favourite day of the week: "),
//     theResponse;


// switch (String(favWeekDay.toLowerCase())) {
//     case "mon" || "monday":
//         theResponse = "Magic Mondays!";
//         break;
//     case "tue" || "tuesday":
//         theResponse = "Taco Tuesday!";
//         break;
//     case "wed" || "wednesday":
//         theResponse = "Wacky Wednesdays!";
//         break;
//     case "thur" || "thursday":
//         theResponse = "THORS DAY!";
//         break;
//     case "fri" || "friday":
//         theResponse = "TGIF!";
//         break;
//     case "sat" || "saturday":
//         theResponse = "WEEKEND!";
//         break;
//     case "sun" || "sunday":
//         theResponse = "Sunday = Funday!";
//         break;
//     default:
//         theResponse = "That's not a day of the week...";
//         break;
// }
// alert(theResponse);

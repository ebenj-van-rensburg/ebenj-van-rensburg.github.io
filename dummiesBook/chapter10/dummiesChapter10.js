"use strict";

let madlibButton = document.getElementById("madlib"),
    adj1 = document.getElementById("adj1"),
    noun1 = document.getElementById("noun1"),
    plNoun1 = document.getElementById("pl-noun1"),
    person = document.getElementById("person"),
    adj2 = document.getElementById("adj2"),
    clothing = document.getElementById("clothing"),
    noun2 = document.getElementById("noun2"),
    city = document.getElementById("city"),
    plNoun2 = document.getElementById("pl-noun2"),
    adj3 = document.getElementById("adj3"),
    bodyPart1 = document.getElementById("body-part1"),
    letter = document.getElementById("letter"),
    celebrity = document.getElementById("celebrity"),
    plNoun3 = document.getElementById("pl-noun3"),
    adj4 = document.getElementById("adj4"),
    place = document.getElementById("place"),
    bodyPart2 = document.getElementById("body-part2"),
    adj5 = document.getElementById("adj5"),
    adj6 = document.getElementById("adj6"),
    verb = document.getElementById("verb"),
    plNoun4 = document.getElementById("pl-noun4"),
    number = document.getElementById("number"),
    story = document.getElementById("display-area");

madlibButton.onclick = madlib;

function madlib() {
    let theStory;
    
    adj1 = "<span class='replacement'>"+ document.getElementById("adj1").value + "</span>",
    noun1 = "<span class='replacement'>"+ document.getElementById("noun1").value + "</span>",
    plNoun1 = "<span class='replacement'>"+ document.getElementById("pl-noun1").value + "</span>",
    person = "<span class='replacement'>"+ document.getElementById("person").value + "</span>",
    adj2 = "<span class='replacement'>"+ document.getElementById("adj2").value + "</span>",
    clothing = "<span class='replacement'>"+ document.getElementById("clothing").value + "</span>",
    noun2 = "<span class='replacement'>"+ document.getElementById("noun2").value + "</span>",
    city = "<span class='replacement'>"+ document.getElementById("city").value + "</span>",
    plNoun2 = "<span class='replacement'>"+ document.getElementById("pl-noun2").value + "</span>",
    adj3 = "<span class='replacement'>"+ document.getElementById("adj3").value + "</span>",
    bodyPart1 = "<span class='replacement'>"+ document.getElementById("body-part1").value + "</span>",
    letter = "<span class='replacement'>"+ document.getElementById("letter").value + "</span>",
    celebrity = "<span class='replacement'>"+ document.getElementById("celebrity").value + "</span>",
    plNoun3 = "<span class='replacement'>"+ document.getElementById("pl-noun3").value + "</span>",
    adj4 = "<span class='replacement'>"+ document.getElementById("adj4").value + "</span>",
    place = "<span class='replacement'>"+ document.getElementById("place").value + "</span>",
    bodyPart2 = "<span class='replacement'>"+ document.getElementById("body-part2").value + "</span>",
    adj5 = "<span class='replacement'>"+ document.getElementById("adj5").value + "</span>",
    adj6 = "<span class='replacement'>"+ document.getElementById("adj6").value + "</span>",
    verb = "<span class='replacement'>"+ document.getElementById("verb").value + "</span>",
    plNoun4 = "<span class='replacement'>"+ document.getElementById("pl-noun4").value + "</span>",
    number = "<span class='replacement'>"+ document.getElementById("number").value + "</span>",
    
    theStory = "<h1>How to pick Reading Material</h1><br>";
    theStory += "There are many " + adj1 + " ways to choose a/an " + noun1 + " to<br><br>";
    theStory += "read. First, you could ask for recommensdations from your friends and<br><br>";
    theStory += plNoun1 + ". Just don't ask Aunt " + person + "-she only<br><br>";
    theStory += "reads " + adj2 + " books with " + clothing + "-ripping goddesses<br><br>";
    theStory += "on the cover. If your friends and family are no help, try checking out the<br><br>";
    theStory += noun2 + " Review in <i>The " + city + " Times</i>. If the " + plNoun2 + "<br><br>";
    theStory += "featured there are too " + adj3 + " for your taste, try something a little<br><br>";
    theStory += "more low-" + bodyPart1 + ", like <i>" + letter + ": The " + celebrity + "</i><br><br>";
    theStory += "<i>Magazine</i>, or <i>" + plNoun3 + " Magazine</i>. You could also choose a book the<br><br>";
    theStory += adj4 + "-fashioned way. Head to your local library or " + place + "<br><br>";
    theStory += "and browse the shelves until something catches your " + bodyPart2 + ".<br><br>";
    theStory += "Or, you could save yourself a whole lot of " + adj5 + " trouble and log on<br><br>";
    theStory += " to www.bookish.com, the " + adj6 + " new website to " + verb + " for<br><br>";
    theStory += "books! With all the time you'll save not having to search for " + plNoun4 + ",<br><br>";
    theStory += "you can read " + number + " more books!";

    story.innerHTML = theStory;
}
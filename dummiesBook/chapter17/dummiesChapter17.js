"use strict";

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    weather = [
        "Sunny",
        "Partly Sunny",
        "Cloudy",
        "Partly Cloudy",
        "Raining",
        "Thunderstorm",
        "Snowing",
        "Foggy"
    ],

    minTemp = 0,
    maxTemp = 100;

function generateWeather() {
    for (let i = 0; i <  days.length; i++) {
        let todaysWeather = weather[Math.floor(Math.random() * weather.length)],
            todaysTemp = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + todaysWeather + "'><b>Forecast for " + days[i] + ":</b><br><br>" + todaysWeather + " and " + todaysTemp + " degrees.</div></span>";
    }
}

generateWeather();

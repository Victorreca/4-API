"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const reportJokes = [];
const shapes = ["shape1", "shape2", "shape3"];
let currentShapeIndex = 0;
const changeContainerShape = () => {
    const containerShape = document.getElementById("jokeContainer");
    containerShape === null || containerShape === void 0 ? void 0 : containerShape.classList.remove(shapes[currentShapeIndex]);
    if (currentShapeIndex < shapes.length - 1) {
        currentShapeIndex = currentShapeIndex + 1;
    }
    else {
        currentShapeIndex = 0;
    }
    containerShape === null || containerShape === void 0 ? void 0 : containerShape.classList.add(shapes[currentShapeIndex]);
};
const showJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    const newJoke = document.getElementById("newJoke");
    const selectedEmoji = document.querySelector("input[name='emojiRating']:checked");
    const emojiRating = selectedEmoji ? parseInt(selectedEmoji.value) : null;
    const randomNumber = Math.round(Math.random());
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    };
    try {
        let jokeText = "";
        if (randomNumber % 2 === 0) {
            const url = "https://icanhazdadjoke.com/";
            const response = yield fetch(url, options);
            const result = yield response.json();
            jokeText = result.joke;
        }
        else {
            const url = `https://api.chucknorris.io/jokes/random`;
            const response = yield fetch(url, options);
            const result = yield response.json();
            jokeText = result.value;
        }
        if (newJoke) {
            newJoke.textContent = jokeText;
            const currentDate = new Date().toISOString();
            if (emojiRating) {
                let joke = {
                    joke: jokeText,
                    score: emojiRating,
                    date: currentDate,
                };
                reportJokes.push(joke);
                console.log(reportJokes);
                if (selectedEmoji) {
                    selectedEmoji.checked = false;
                }
            }
        }
        else {
            console.log("error");
        }
        changeContainerShape();
    }
    catch (error) {
        console.log("Joke not found", error);
    }
});
const showWheater = () => __awaiter(void 0, void 0, void 0, function* () {
    const apiKey = "63328fd6f4579d92c2bfb4a3eb86a02d";
    const weatherIcon = document.getElementById("weatherIcon");
    const infoTemp = document.getElementById("temp");
    const currentTown = document.getElementById("currentTown");
    if (!weatherIcon || !infoTemp || !currentTown) {
        console.error("One or more required DOM elements don't exist");
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=41.63&lon=2.21&appid=${apiKey}&units=metric`;
    try {
        const response = yield fetch(url);
        const result = yield response.json();
        currentTown.textContent = result.name + ":";
        const weatherIconCode = result.weather[0].icon;
        const tempInfo = parseInt(result.main.temp);
        infoTemp.textContent = `${tempInfo}°C`;
        weatherIcon.src =
            "https://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png";
        if (weatherIconCode) {
            weatherIcon.classList.remove("d-none");
            weatherIcon.classList.add("d-block");
        }
    }
    catch (error) {
        console.error(error);
    }
});
showWheater();
showJoke();

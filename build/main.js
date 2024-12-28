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
const showJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    const newJoke = document.getElementById("newJoke");
    const selectedEmoji = document.querySelector("input[name='emojiRating']:checked");
    const emojiRating = selectedEmoji ? parseInt(selectedEmoji.value) : null;
    const url = "https://icanhazdadjoke.com/";
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    };
    try {
        const response = yield fetch(url, options);
        const result = yield response.json();
        if (newJoke) {
            newJoke.textContent = result.joke;
            const currentDate = new Date().toISOString();
            if (emojiRating) {
                let joke = {
                    joke: result.joke,
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
    }
    catch (error) {
        console.log("Joke not found", error);
    }
});
showJoke();

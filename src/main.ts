const reportJokes: Array<{ joke: string; score: number; date: string }> = [];
const showJoke = async (): Promise<void> => {
  const newJoke = document.getElementById("newJoke");
  const selectedEmoji = document.querySelector(
    "input[name='emojiRating']:checked"
  ) as HTMLInputElement | null;

  const emojiRating = selectedEmoji ? parseInt(selectedEmoji.value) : null;

  const url = "https://icanhazdadjoke.com/";
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
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
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log("Joke not found", error);
  }
};

const showWheater = async (): Promise<void> => {
  const apiKey = "63328fd6f4579d92c2bfb4a3eb86a02d";
  const infoMeteo = document.getElementById(
    "infoMeteo"
  ) as HTMLSpanElement | null;
  const infoHumidity = document.getElementById(
    "infoHumidity"
  ) as HTMLSpanElement | null;
  const currentTown = document.getElementById(
    "currentTown"
  ) as HTMLSpanElement | null;

  if (!infoMeteo) {
    console.error("'infoMeteo' doesn't exist.");
    return;
  }
  if (!infoHumidity) {
    console.error("'infoHumidity' doesn't exist.");
    return;
  }
  if (!currentTown) {
    console.error("currentTown' doesn't exist.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=41.63&lon=2.21&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    currentTown.textContent = result.name + ":";
    const weatherNow = result.weather[0].description;
    const capitalLetterWeatherNow =
      weatherNow.charAt(0).toUpperCase() + weatherNow.slice(1);
    weatherNow;
    infoMeteo.textContent = capitalLetterWeatherNow;
    const humidityNow = result.main.humidity;
    infoHumidity.textContent = humidityNow + "%";
  } catch (error) {
    console.error(error);
    infoMeteo.textContent = "Error al obtenir la informació del clima.";
  }
};
showWheater();
showJoke();

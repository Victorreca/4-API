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

showJoke();

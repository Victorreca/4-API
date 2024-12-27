const showJoke = async (): Promise<void> => {
  const newJoke = document.getElementById("newJoke");
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
    newJoke ? (newJoke.textContent = result.joke) : console.log("error");
  } catch (error) {
    console.log("Joke not found", error);
  }
};

showJoke();

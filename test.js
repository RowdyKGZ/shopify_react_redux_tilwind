const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4de5cb1fddmshaed70ccf59f85ebp1cb8b8jsn6e65125cc847",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

fetch(
  "https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const axios = require("axios");


let get_weather = (lat, lng) => {
  const weather_url = `https://api.darksky.net/forecast/0824a2e973011d8a2d65b8cca495af14/${lat},${lng}`;

  return axios.get(weather_url);
}


module.exports = {
  get_weather
}

const axios= require("axios");


let get_weatherurl = (encoded_address) => {
  const key = "AIzaSyD_NOaWJSd6D_fWQwGQ4bN2jsT3Xl75B8w";
  const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}&key=${key}`;

  return axios.get(geocodeURL);
}


module.exports = {
  get_weatherurl
}

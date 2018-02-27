const express = require('express');
const hbs = require('hbs');
const path = require('path');

const geocode = require("./Geocode/geocode.js")
const weather = require("./Weather/weather.js")


const app = express();
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(path.join(__dirname, "views", "partials"));
hbs.registerHelper('getYear', () => {
  return new Date().getFullYear();
})


app.get('/vacation', (req, res) => {
  const destination = req.query.destination;

  if (destination === 'Hawaii') {

    geocode.get_weatherurl("Hawaii")
      .then(response => {
        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;
        return weather.get_weather(lat, lng);
      })
      .then(response => {
        const hawaii_temp = response.data.currently.temperature;
        res.render('index.hbs', {
          pageTitle: "Vacation",
          name: "Jim",
          hawaii_temp,
          img1: "https://www.hawaiidiscount.com/blog/wp-content/uploads/2015/12/turkey-852044_1920.jpg",
          img2: "https://hawaiistateparks.org/wp-content/uploads/2016/07/relax_hawaii.jpg",
          img3: "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1502722460%2Fhanauma-bay-nature-preserve-oahu-hawaii-HAWAIIFLIGHTDEAL0817.jpg%3Fitok%3D5RHXufdE&w=800&q=85"
        })
      })

  } else if (destination === 'Athen') {

    geocode.get_weatherurl("Athen")
      .then(response => {
        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;
        return weather.get_weather(lat, lng);
      })
      .then(response => {
        const athen_temp = response.data.currently.temperature;
        res.render('index.hbs', {
          pageTitle: "Vacation",
          name: "Jim",
          athen_temp,
          img1: "https://cdn.theculturetrip.com/images/56-3965740-1443616056b9ef352f0b524c6c9891f4e078e860b0.jpg",
          img2: "https://www.dnb.no/portalfront/bilder-dnb/bedrift/steder/Athen-Acropoli-iStock-000013261014-920-360.jpg",
          img3: "http://www.display-magazin.ch/wp-content/uploads/2016/09/Athen-Display-Magazin_4.jpg"
        })
      })

  } else if (destination === 'Rome') {

    geocode.get_weatherurl("Rome")
      .then(response => {
        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;
        return weather.get_weather(lat, lng);
      })
      .then(response => {
        const rome_temp = response.data.currently.temperature;
        res.render('index.hbs', {
          pageTitle: "Vacation",
          name: "Jim",
          rome_temp,
          img1: "http://nohopizza.com/images/pizzas/p_meatlover.jpg",
          img2: "https://fthmb.tqn.com/J7d-8X28kFMGvvi6FDY9DpE6tzw=/960x0/filters:no_upscale()/the-roman-coliseum-during-a-warm-spring-sunset-542105331-58f15ac63df78cd3fc763275.jpg",
          img3: "http://www.telegraph.co.uk/content/dam/travel/Spark/Holiday%20hunter/saga-trevi-fountain-xlarge.jpg"
        })
      })

  }
})



app.listen(3000, () => {
  console.log("listening on port 3000");
})

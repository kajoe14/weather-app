const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
   res.render('about', {
      title: 'About the Project',
      intro: 'The Weather API is developed using NODE.JS - taking into use depedencies including Express, Joi, Request among others. It also puts into use the HBS Templating Engine to render the HTML pages. ',
      introExtra: 'It integrates with two APIs to fetch real-time data of current weather conditions across the globe. These APIs are namely:',
      api1Title: 'Dark Sky API',
      api1Description: 'The Dark Sky API offers a full collection of meteorological conditions in 39 different languages. The API allows you to look up the weather anywhere on the globe, returning where available - ',
      api1List: {
         item1: 'Current weather conditions',
         item2: 'Minute-by-minute forecasts out to one hour',
         item3: 'Hour-by-hour and day-by-day forecasts out to seven days',
         item4: 'Hour-by-hour and day-by-day observations going back decades'
      },
      api2Title: 'Gecoding API',
      api2Description: 'The Mapbox Geocoding API does two things: forward geocoding and reverse geocoding.',
      api2extra: 'Forward geocoding converts location text into geographic coordinates',
      api2extra2: 'Reverse geocoding on the other hand turns geographic coordinates into place names.',
      more: 'Read More...',
      creator: 'Developed with ♥ by Joseph Gitau',
   });
});

module.exports = route;
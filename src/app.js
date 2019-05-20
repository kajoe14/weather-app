const path = require('path');
const express = require('express');
const hbs = require('hbs');
const request = require('request');
const about = require('./routes/about');

const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const app = express();

// Paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// static config
app.use(express.static(publicDirectoryPath));
app.use('/about', about);

app.get('', (req, res) => {
  res.render('index', {
    title: 'Search for the Weather',
    creator: 'Developed with ♥ by Joseph Gitau'
  });
});


app.get('/help', (req, res) => {
  res.render('help', {
    title: 'We are here to Help.',
    message: 'Do you need Help?'
  });
});


app.get('/weather', (req, res) => {
  if(!req.query.address) {
    return res.send({
      error: 'You need to provide an address'
    });
  } 

  geocode(req.query.address, (error, { latitude, longitude, location}  = {}) => {
    if(error) {
      return res.send({ error })
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: forecastData,
        location,
        address: req.query.address,

      })
 
    })
  })


});



app.get('/help/*', (req, res) => {
  res.render('help-404', {
    title: 'Help page Not Found'
  });
});



app.get('*', (req, res) => {
  res.render('404', {
    title: '404 - Page Not Found'
  });
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Listening on port ' + port + '....'))
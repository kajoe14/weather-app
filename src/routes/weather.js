const express = require('express');

const route = express.Router();

route.get('', (req, res) => {
   res.render('index', {
      title: 'Search for the Weather',
      creator: 'Developed with ♥ by Joseph Gitau'
   });
});

module.exports = route;
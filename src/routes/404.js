const express = require('express');

const route = express.Router();

route.get('', (req, res) => {
   res.render('404', {
      title: '404 - Page Not Found'
   });
});

module.exports = route;
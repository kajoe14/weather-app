const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/fe34d4bb7eacc5616a2e0f4b6141890c/' + latitude + ',' + longitude + '?units=si';
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Error establishing a coonection with API', undefined)
    } else if (response.body.error) {
      callback('The location is invalid, please search again', undefined)
    } else { 
      callback(undefined, {
        sum: response.body.daily.data[0].summary,
        icon: response.body.daily.data[0].icon,
        temp: response.body.currently.temperature,
        precipitation: response.body.daily.data[0].precipProbability,
        humidity: response.body.daily.data[0].humidity,
        wind: response.body.daily.data[0].windSpeed
      });
    }
  });
}

module.exports = forecast;

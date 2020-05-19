const request = require('request');



const forecast = (long, lat, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=a03e3470eaa547e651a47fd3880546d6&query=${long},${lat}&units=f`

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather services')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            const actualTemp = body.current.temperature;
            const feelsLikeTemp = body.current.feelslike;
            callback(undefined, `${body.current.weather_descriptions[0]} It is currently ${actualTemp} degrees out. It feels like ${feelsLikeTemp} degrees out`)
        }
    })
}

module.exports = forecast;
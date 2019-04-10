const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/e87f7a7e28016f39343dc3a8c39b49a9/${latitude},${longitude}?units=si`

    request({ url, 'json': true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            const currently = body.currently
            const today = body.daily.data[0]
            callback(undefined, `${today.summary} It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability}% chance of rain, the high for the day is ${today.temperatureHigh} and the low is ${today.temperatureLow}`)
        }
    })
}

module.exports = forecast

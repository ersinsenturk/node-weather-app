const request = require('postman-request')

const forecast = (lat, long, callback) => {
    url = 'http://api.weatherstack.com/current?access_key=2cabe542b8d1cc027b54a5d67a1889fb&query='+ lat +','+ long 

    request({ url, json: true }, (error, {body}) => {
        console.log(body)
        if (error) {
            callback("Unable to connect", undefined)
        } else if (body.error){
            callback("Unable to find", undefined)
        } else {
            callback(undefined, 'Currently '+ body.current.temperature +' C. ')
        }
        
    })
}

module.exports = forecast
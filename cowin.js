var request = require('request');
const BASE_URL = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin`

module.exports = {
    getCenters: (pincode, date, callback) => {
        var params = { "pincode": pincode, "date": date };
        var body = {}
        request.get({
            url: 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin',
            qs: params
        }, function (error, response, body) {
            var responseObject = response.headers;
            responseObject.body = body;
            callback(responseObject);
        })
        return body;
    }
}
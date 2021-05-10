var request = require('request');
const BASE_URL = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin`

module.exports = {
    getCenters: (pincode, callback) => {
        var nowDate = new Date();
        var date = nowDate.getDate() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getFullYear();
        var params = { "pincode": pincode, "date": date };
        console.log(pincode)
        console.log(date)
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
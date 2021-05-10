var request = require('request');
const BASE_URL = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin`

module.exports = {
    getCenters: (pincode, callback) => {
        var headers = { ":authority" : "cdn-api.co-vin.in", ":method" : "GET", ":scheme" : "https", ":path" : "/api/v2/appointment/sessions/public/calendarByPin?pincode=444203&date=09-05-2021"}
        var nowDate = new Date();
        var date = nowDate.getDate() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getFullYear();
        var params = { "pincode": pincode, "date": date };
        console.log(pincode)
        console.log(date)
        var body = {}
        request.get({
            url: 'http://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin',
            qs: params
        }, function (error, response, body) {
            var responseObject = {};
            responseObject.body = body;
            callback(responseObject);
        })
        return body;
    }
}
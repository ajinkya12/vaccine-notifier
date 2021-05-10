var request = require('request');
var https = require('https');
const BASE_URL = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin`

module.exports = {
    getCenters: (pincode, callback) => {
        var nowDate = new Date();
        var date = nowDate.getDate() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getFullYear();
        console.log(pincode)
        console.log(date)

        var options = {
            host :  'cdn-api.co-vin.in',
            port : 443,
            path : '/api/v2/appointment/sessions/public/calendarByPin?pincode=' + pincode + '&date=' + date,
            method : 'GET'
        }

        //making the https get call
        var getReq = https.request(options, function(res) {
            console.log("\nstatus code: ", res.statusCode);
            res.on('data', function(data) {
                console.log(JSON.parse(data));
                callback(data);
            });
        });

        //end the request
        getReq.end();
        getReq.on('error', function(err){
            console.log("Error: ", err);
        });
        /*
        var params = { "pincode": pincode, "date": date };
        var body = {}
        request.get({
            url: 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin',
            qs: params
        }, function (error, response, body) {
            var responseObject = {};
            responseObject.body = body;
            callback(responseObject);
        })
        */
    }
}
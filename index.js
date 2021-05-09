const cron = require('node-cron');
const express = require('express');
const assert = require('assert');

const CowinAPI = require('./cowin')
const SlackAPI = require('./slack')
app = express();

const ApiCall = () => {
    CowinAPI.getCenters(444203, '09-05-2021', function(responseObject) {
        console.log(responseObject.body);
        var body = JSON.parse(responseObject.body);
        var centers = body['centers'];
        centers.map(center => {
            console.log(center.address)
        })
        console.log("available :: " + centers);
        var payload = SlackAPI.formatResponse(centers);
        SlackAPI.sendMessage(payload);
    });
}

ApiCall()


// Schedule tasks to be run on the server.
cron.schedule('* * * * *', function() {
  ApiCall();
  console.log('running a task every minute');
});

app.listen(3000);
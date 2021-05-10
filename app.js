const cron = require('node-cron');
const express = require('express');

const port = process.env.PORT || 3000
const CowinAPI = require('./cowin')
const SlackAPI = require('./slack')
app = express();

const ApiCall = () => {
    CowinAPI.getCenters(444203, function(data) {
        var body = JSON.parse(data);
        var centers = body['centers'];
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

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log("App listening on port: " + port)
});
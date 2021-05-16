var request = require('request');
var dotenv = require('dotenv');
dotenv.config();

module.exports = {
    sendMessage(payload) {
        var url = process.env.SLACK_API;
        var actual = url.split("").reverse().join("");
        request.post({
            headers: {'content-type': 'application/json'},
            url: actual,
            body: JSON.stringify(payload)
        });
    },
    formatResponse(centers) {
        var res = {};
        res['username'] = 'Vaccine';
        res['icon_emoji'] = ':eyes:';

        if(centers.length == 0) {
            res['text'] = 'NOT Available';
            return res;
        }

        var blocks = [];
        centers.map(center => {
            var sessions = Object.entries(center.sessions);
            var sessions = center['sessions'];
            sessions.map(session => {
                var min_age_limit = session['min_age_limit'];
                var available = session['available_capacity'];
                if(min_age_limit >= 18 && available > 0) {
                    var block = {};
                    block['type'] = 'section';
                    var text = {};
                    text['type'] = 'mrkdwn';
                    text['text'] = '*' + center['name'] + '* - *' + center['address'] + '* available doses: ' + session['available_capacity'];
                    block['text'] = text;
                    blocks.push(block);
                }
            })

        })

        if(blocks.length == 0) {
            res['text'] = 'NOT Available';
            return res;
        }
        res['text'] = 'Available';
        res['blocks'] = blocks;
        return res;
    }
}
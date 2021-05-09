var request = require('request');

module.exports = {
    sendMessage(payload) {
    var url = "ItyIUcdBtOp2Z2Q3JfrC0DqB/2NF1H14120B/F9NEV435T/secivres/moc.kcals.skooh//:sptth";
    var actual = url.split("").reverse().join("");

    console.log(payload);
    console.log('Stringify : ' + JSON.stringify(payload));
    request.post({
        headers: {'content-type': 'application/json'},
        url: actual,
        body: JSON.stringify(payload)
    }, function(error, response, body) {
        console.log("response" + response);
        console.log(body);
        console.log(error);
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
    res['text'] = 'Available';

    var blocks = [];
    centers.map(center => {
        var sessions = Object.entries(center.sessions);
        var sessions = center['sessions'];
        sessions.map(session => {
            var min_age_limit = session['min_age_limit'];
            if(min_age_limit >= 18) {
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
    res['blocks'] = blocks;
    return res;
  }
}
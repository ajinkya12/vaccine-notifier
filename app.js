function available() {
    const vaccines = [];
    $.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin',
    {pincode: 444203, date: '09-05-2021'},
    function(response){
        var centers = response['centers'];
        centers.map(center => {
            console.log(center.address)
        })
        console.log("available :: " + centers);
        sendMessage(centers);
    });
  };

function sendMessage(centers) {
    var url = "ItyIUcdBtOp2Z2Q3JfrC0DqB/2NF1H14120B/F9NEV435T/secivres/moc.kcals.skooh//:sptth";
    var actual = url.split("").reverse().join("");

    var payload = formatResponse(centers);
    $.ajax({
        type: 'POST',
        url: actual,
        data: 'payload=' + JSON.stringify(payload),
        dataType: "json"
    });
}

function formatResponse(centers) {
    var res = {};
    if(centers.length == 0) {
        res['text'] = 'NOT AVAILABLE';
        return res;
    }
    res['text'] = 'AVAILABLE VACCINE';
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
                text['text'] = '*' + center['name'] + '* - *' + center['address'] + '* doses:' + session['available_capacity'];
                block['text'] = text;

                blocks.push(block);
            }
        })

    })
    return blocks;
}
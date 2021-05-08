function available() {
    $.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin',
    {pincode: 444203, date: '09-05-2021'},
    function(response){
        var tickets = response.includes('centers');
        console.log("available :: " + tickets);
        if(tickets) {
          sendMessage();
        }
    });
  };

function sendMessage() {
    var url = "ItyIUcdBtOp2Z2Q3JfrC0DqB/2NF1H14120B/F9NEV435T/secivres/moc.kcals.skooh//:sptth";
    var actual = url.split("").reverse().join("");
    var text = "Hello Aditi";
    $.ajax({
        type: 'POST',
        url: actual,
        data: 'payload=' + JSON.stringify({
          "text": text
        }),
        dataType: "json"
    });
}

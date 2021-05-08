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
        if(centers.length > 0) {
          sendMessage();
        }
    });
  };

function sendMessage() {
    var url = "ItyIUcdBtOp2Z2Q3JfrC0DqB/2NF1H14120B/F9NEV435T/secivres/moc.kcals.skooh//:sptth";
    var actual = url.split("").reverse().join("");
    var text = "<b>Hello Aditi</b>";
    $.ajax({
        type: 'POST',
        url: actual,
        data: 'payload=' + JSON.stringify({
          "text": text
        }),
        dataType: "json"
    });
}

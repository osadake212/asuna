const sendMessageUrl = "https://trialbot-api.line.me/v1/events";

var request = require('request');

var postMessage = function(mids, message) {
  //ヘッダーを定義
  var headers = {
    'Content-Type': 'application/json; charser=UTF-8',
    'X-Line-ChannelID': process.env.LINE_CHANNEL_ID,
    'X-Line-ChannelSecret': process.env.LINE_CHANNEL_SECRET,
    'X-Line-Trusted-User-With-ACL': process.env.LINE_TRUSTED_USER_WITH_ACL,
  }

  //オプションを定義
  var options = {
    url: sendMessageUrl,
    method: 'POST',
    headers: headers,
    json: true,
    form: {
      "to":mids,
      "toChannel":1383378250,
      "eventType":"138311608800106203",
      "content":{
        "contentType":1,
        "toType":1,
        "text": message
      }
    }
  };

  //リクエスト送信
  request(options, function (error, response, body) {
    console.log("-----------------------");
    console.log(body);
    console.log(error);
  })
};

exports.callback = function(req, res) {
  console.log("-----------------------");
  console.log(req.body);
  console.log(req.body.result[0]);
  // var info = req.body.result.last();
  // postMessage([info.from], "テスト");
  // res.send('callback');
};

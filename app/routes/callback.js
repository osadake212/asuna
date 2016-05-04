const sendMessageUrl = "https://trialbot-api.line.me/v1/events";

var
  request = require('request'),
  lineHeaders = {
    'X-Line-ChannelID': process.env.LINE_CHANNEL_ID,
    'X-Line-ChannelSecret': process.env.LINE_CHANNEL_SECRET,
    'X-Line-Trusted-User-With-ACL': process.env.LINE_TRUSTED_USER_WITH_ACL
  };

var postMessage = function(mids, message) {
  var options = {
    url: sendMessageUrl,
    method: 'POST',
    headers: lineHeaders,
    json: {
      "to": mids,
      "toChannel": 1383378250,
      "eventType": "138311608800106203",
      "content": {
        "contentType": 1,
        "toType": 1,
        "text": message
      }
    }
  };

  request(options, function (error, response, body) {
    console.log("-----------------------");
    console.log(body);
  });
};

exports.callback = function(req, res) {
  postMessage([req.body.content.from], "あすなだよ");
  res.status(200).send();
};

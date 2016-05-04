const sendMessageUrl = "https://trialbot-api.line.me/v1/events";
const lineHeaders = {
  'X-Line-ChannelID': process.env.LINE_CHANNEL_ID,
  'X-Line-ChannelSecret': process.env.LINE_CHANNEL_SECRET,
  'X-Line-Trusted-User-With-ACL': process.env.LINE_TRUSTED_USER_WITH_ACL
};

var request = require('request');

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
    // TODO: error handling
  });
};

exports.callback = function(req, res) {
  var
    ids = [],
    result = req.body.result;

  for (var key in result) {
    if (result.hasOwnProperty(key)) {
      ids.push(result[key].content.from);
    }
  }

  postMessage(ids, "あすなだよ");
  res.status(200).send();
};

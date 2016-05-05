const asunaMessages = [
  "今までそういう顔した人から、何度か結婚を申し込まれたわ",
  "ねぇ、君…もしかして死にたいの…?殺されたいヒトなの…?",
  "私は死なないよ。だって私は…君を守る方だもん。",
  "もちろん、行くよ、一緒に。きみの行くところなら、どこにだって。",
  "ねぇ、もし君なら。仮に誰かと結婚したあとになって、相手の人の隠れた一面に気付いたとき…。君ならどう思う？",
  "その様子じゃ、他に仲良い子とかいないでしょ、君"
]

var
  replyMessage,
  randomMessage;

replyMessage = function (message) {
  var replyMessage;
  switch (message) {
    case 'はじめまして':
      replyMessage = 'ようやく、ようやく君に会えた。はじめまして。結城明日奈です';
      break;
    case 'すき':
      replyMessage = 'わたしも♡';
      break;
    case 'だいすき':
      replyMessage = '結婚しよ♡';
      break;
    default:
      replyMessage = randomMessage('')
      break;
  }

  return replyMessage;
}

randomMessage = function (userName) {
  // TODO: replace user name
  return asunaMessages[Math.floor(Math.random() * asunaMessages.length)];
}

exports.replyMessage = replyMessage;

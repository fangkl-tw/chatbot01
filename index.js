var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1653767334',
  channelSecret: 'f02ef69c805e6d7b87c733516159a760',
  channelAccessToken: 'kcaVVRCi+NcmbK5Z1H19jylD4D9XZHeai27F+x8eoxhUkOaNjyYOT/C8vi2lcGNqMHgetSQaDez3IppqnP/GYEvCeYmH5AQe5Omfl2Ul9Z3G6ec9vdW1xDojwfMeL6EqbvTyvRkHFSyUmcBuItFvEgdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
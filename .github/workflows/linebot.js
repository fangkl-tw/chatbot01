var linebot = require('linebot');
 
var bot = linebot({
  channelId: '1653767334',
  channelSecret: 'f02ef69c805e6d7b87c733516159a760',
  channelAccessToken: 'kcaVVRCi+NcmbK5Z1H19jylD4D9XZHeai27F+x8eoxhUkOaNjyYOT/C8vi2lcGNqMHgetSQaDez3IppqnP/GYEvCeYmH5AQe5Omfl2Ul9Z3G6ec9vdW1xDojwfMeL6EqbvTyvRkHFSyUmcBuItFvEgdB04t89/1O/w1cDnyilFU='
});
 
bot.on('message', function (event) {
  event.reply(event.message.text).then(function (data) {
    // success
  }).catch(function (error) {
    // error
  });
  
  event.reply([
  { type: 'text', text: 'Hello, world 1' },
  { type: 'text', text: 'Hello, world 2' }
  ]);
  
  event.reply({
  type: 'image',
  originalContentUrl: 'https://example.com/original.jpg',
  previewImageUrl: 'https://example.com/preview.jpg'
  });
  
  event.reply({
  type: 'template',
  altText: 'this is a buttons template',
  template: {
    type: 'buttons',
    thumbnailImageUrl: 'https://example.com/bot/images/image.jpg',
    title: 'Menu',
    text: 'Please select',
    actions: [{
      type: 'postback',
      label: 'Buy',
      data: 'action=buy&itemid=123'
    }, {
      type: 'postback',
      label: 'Add to cart',
      data: 'action=add&itemid=123'
    }, {
      type: 'uri',
      label: 'View detail',
      uri: 'http://example.com/page/123'
    }]
  }
  });
 
  event.reply({
  type: 'template',
  altText: 'this is a confirm template',
  template: {
    type: 'confirm',
    text: 'Are you sure?',
    actions: [{
      type: 'message',
      label: 'Yes',
      text: 'yes'
    }, {
      type: 'message',
      label: 'No',
      text: 'no'
    }]
  }
  });
  
});

 
bot.listen('/linewebhook', 3000);
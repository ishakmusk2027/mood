const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
//environment
require('dotenv').config()

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1271896737241366682')
    .setType('PLAYING')
    .setURL('https://discord.gg/vPGJngQbUx') 
    .setState('Hero')
    .setName('Hero On Top')
    .setDetails(`Join Server`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1271463274537291920/1271637467954548736/39632582222_6.webp?ex=66b8b8ee&is=66b7676e&hm=b9a2561f21ad0a6cea7b4ae9abae940a6feac54eff1b27a01afbb9732befb3fc&=&format=webp') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Hero On Top') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1271463274537291920/1271640687267287070/snapedit_1723122031051-removebg-preview_3.webp?ex=66b8bbed&is=66b76a6d&hm=6e9104c5b95c2580a456065accd09ff108e1004236e2dce298557418ef3b7bf6&=&format=webp') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Hero Server') 
    .addButton('Join', 'https://discord.gg/vPGJngQbUx');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);

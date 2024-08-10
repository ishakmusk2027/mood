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
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1271463274537291920/1271640478269440020/39632582222_2_1.webp?ex=66b8bbbb&is=66b76a3b&hm=f822ce3c585e2ffe5959d8797f25ef60a4cd8564d2930667ea9633350b66a77c&=&format=webp&width=550&height=309') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Hero On Top') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1271463274537291920/1271640687267287070/snapedit_1723122031051-removebg-preview_3.webp?ex=66b8bbed&is=66b76a6d&hm=6e9104c5b95c2580a456065accd09ff108e1004236e2dce298557418ef3b7bf6&=&format=webp') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Hero Server') 
    .addButton('Join', 'https://discord.gg/vPGJngQbUx');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);

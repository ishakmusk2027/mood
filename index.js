const Discord = require('discord.js-selfbot-v13');
const express = require('express');
require('dotenv').config();

// إعداد خادم Express
const app = express();
const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send(`
    <body>
      <center><h1>Bots 24H ON!</h1></center>
    </body>`);
});

// دالة لتنسيق الوقت
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

// توكنات البوتات
const tokens = [process.env.TOKEN1, process.env.TOKEN2, process.env.TOKEN3];

// إعداد البوتات
tokens.forEach(token => {
  const client = new Discord.Client({
    readyStatus: false,
    checkUpdate: false
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
      .setDetails('Join Server')
      .setStartTimestamp(Date.now())
      .setAssetsLargeImage('https://media.discordapp.net/attachments/1271463274537291920/1271637467954548736/39632582222_6.webp?ex=66b8b8ee&is=66b7676e&hm=b9a2561f21ad0a6cea7b4ae9abae940a6feac54eff1b27a01afbb9732befb3fc&=&format=webp')
      .setAssetsLargeText('Hero On Top')
      .setAssetsSmallImage('https://cdn3.emoji.gg/emojis/8409-nitro.png')
      .setAssetsSmallText('Hero Server')
      .addButton('Join', 'https://discord.gg/vPGJngQbUx');

    client.user.setActivity(r);
    client.user.setPresence({ status: "idle" }); // dnd, online, idle, offline
  });

  client.login(token);
});


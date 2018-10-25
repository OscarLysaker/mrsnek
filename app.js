const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready', () => {
    console.log('I am ready.');
});

client.on('message', message => {
    if (message.content == 'ping') {
        message.reply('pong');
    }

    if (message.content == 'fak u') {
        message.reply('no u');
    }
    
    if (message.content == 'hiss') {
        message.reply('this is snek');
        message.channel.sendMessage('*hisssssssss............hissssssss..........ssssssssssss.....*');
    }
});

client.login(process.env.BOT_TOKEN);

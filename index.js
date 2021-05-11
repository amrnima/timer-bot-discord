const Discord = require('discord.js');
const prefix = '$lg';
const token = 'ODE3Njk0OTQyMzYwMjQwMTQ5.YENPwg.oqDwzniag-VEzF2K5E0gz-qfCiw';

const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.on('ready', () => {
    console.log('have fun together in Legends server');
    client.user.setActivity(`welcome to discord ready the bot`);
});
client.on('warn' , info => info);
client.on('error', console.error);
client.login(token);

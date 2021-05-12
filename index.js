const Discord = require('discord.js');
const prefix = process.env.prefix;
const token = process.env.token;

const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.on('ready', () => {
    console.log('welcome to discord ready the bot');
    client.user.setActivity(`welcome to discord ready the bot`);
});
client.on("message", async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return false;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd);
    try {
        await command.execute(message, client, args);
    } catch (error) {
        console.error(error);
        await message.reply('there was an error trying to execute that command!');
    }

})
client.on('warn' , info => info);
client.on('error', console.error);
client.login(token);

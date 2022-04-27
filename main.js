const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('CovidBot is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'worldwide') {
        client.commands.get('worldwide').execute(message, args, Discord);
    } else if (command === 'canada') {
        client.commands.get('canada').execute(message, args, Discord);
    } else if (command === 'covidnews') {
        client.commands.get('covidnews').execute(message, args, Discord);
    }
});

client.login('OTY4NTI0NTE1Mjk2NTQyNzUx.YmgGvg.KwHa_uxRicpemwKxszJ6v4xGKnU');

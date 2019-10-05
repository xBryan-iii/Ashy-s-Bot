const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.ashy1;

const PREFIX = '!';

client.on('ready', () =>{
    console.log('This bot is online!');
    client.user.setActivity('the centre', { type: 'WATCHING'}).catch(console.error);

});

client.on('message', message => {
    
    let args = message.content.slice(PREFIX.length).split(/ +/);

    switch(args[0]) {
        case 'call':
            if (!message.content.startsWith(PREFIX)) return
            message.guild.channels.find(channel => channel.id === "610947298607890455").send(`Thank you for calling, ${message.author}! Please wait for one of our incredible therapists to answer. Keep an eye on ${message.guild.channels.find(channel => channel.id === "610947298607890455")} for an answer. | ${message.guild.roles.find(role => role.id === "610947465570418713")}`)
        break;
        case 'call-2':
            if (!message.content.startsWith(PREFIX)) return
            if (!args[1]) return message.channel.send(`Error occured! ${message.author}, please tag exactly which therapist you want to call.`)
            message.guild.channels.find(channel => channel.id === "610947298607890455").send(`Thank you for calling, ${message.author}! Please wait for the incredible therapist to answer. Keep an eye on ${message.guild.channels.find(channel => channel.id === "610947298607890455")} for an answer. | ${args[1]}`)
        break;
        case 'answer':
            if (!message.content.startsWith(PREFIX)) return
            if (!message.member.roles.find(role => role.id === "610947465570418713")) return message.channel.send(`Error occured! ${message.author}, this command is only for people with the role "${client.guilds.get('610936256062291968').roles.find(role => role.id === "610947465570418713").name}".`)
            if (!args[1]) return message.channel.send(`Error occured! ${message.author}, please tag exactly which person's call you want to answer (tag the person).`)
            //if (args[1] = message.author) return message.channel.send(`Error occured! ${message.author}, you can't answer a call by you.`)
            message.guild.channels.find(channel => channel.id === "610947298607890455").send(`${args[1]}, ${message.author} will be with you in a moment.`)
        break;
    }


});


client.login(token).catch(err => console.log(err));
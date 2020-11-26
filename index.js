const Discord = require('discord.js')
const command = require('./settings.json')
const client = new Discord.Client()
const config = require ('./config.json')

client.on('ready', () => {
    console.log('The client is ready!')

    command(client, 'ping', (message) => {
        message.channel.send('Pinging...').then(sent => {
            sent.edit(`Pong! Latency is ${sent.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        })
      })
    

    command(client, 'servers', (message) => {
        if(message.author.id === "348296915143884801") {
          client.guilds.cache.forEach((guild) => {
            message.channel.send(
                `${guild.name} has a total of ${guild.memberCount} members`)
        })} else return
    })
    command(client, ['cc', 'clearchannel'], message => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
            })
        }
    })
    
    command(client, 'status', message => {
        const content = message.content.replace(';status ', '')

        client.user.setPresence({
            activity: {
                name: content,
                type: 0,
            }
        })
    })
    
    command(client, 'invite', (message) => {
        const embed = new Discord.MessageEmbed()
        .setTitle('Invite DwayneBot')
        .setURL('https://discord.com/oauth2/authorize?client_id=780813319137263618&permissions=8&scope=bot')
        .setAuthor(message.author.username)

        message.channel.send(embed)
    })
    
    command(client, 'help', (message) => {
        const logo = 
        'https://static.bangkokpost.com/media/content/20200903/c1_3738615.jpg'
        
        const embed = new Discord.MessageEmbed()
        
        .setTitle('Help Commands')
        .setDescription('The prefix is `;`')
        .setColor('#FEFFA3')
        .setThumbnail(logo)
        .addFields(
            {name: "Help", value: "Lists out the help menu"},
            {name: "cc/clearchannel", value: "clears last 100 messages **(only for Admins)**"},
            {name: "status", value: "Change the bot's status"},
            {name: "ping", value: "checks the bot's ping"}

        )
        message.channel.send(embed)
    })
    
})

client.login(config.token)
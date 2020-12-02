const Discord = require('discord.js')
const command = require('./command')
const client = new Discord.Client()
const config = require ('./config.json')
require('events').EventEmitter.defaultMaxListeners = 20;

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
            {name: "ping", value: "checks the bot's ping"},
            {name: "kick", value: "Kicks a specified user"},
            {name: "ban", value: "bans a specified user"},
            {name: "stats", value: "Displays the bot Statistics"}

        )
        message.channel.send(embed)
    })
    command(client,'ban', (message) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        if (member.hasPermission('ADMINISTRATOR') || 
        member.hasPermission('BAN_MEMBERS')
        ) {
                const target = mentions.users.first()
                if(target) {
                   const targetMember = message.guild.members.cache.get(target.id)
                   targetMember.ban()
                   message.channel.send(`${tag} That user has been banned.`)
                } else {
                    message.channel.send(`${tag} Please specify someone to ban.`)
                } 
                
            } else {
                message.channel.send(
                    `<${member.id}> You don't have permission to use this command.`
                    )
            }
    })
    command(client,'kick', (message) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        if (member.hasPermission('ADMINISTRATOR') || 
        member.hasPermission('KICK_MEMBERS')
        ) {
                const target = mentions.users.first()
                if(target) {
                   const targetMember = message.guild.members.cache.get(target.id)
                   targetMember.kick()
                   message.channel.send(`${tag} That user has been kicked.`)
                } else {
                    message.channel.send(`${tag} Please specify someone to kick.`)
                } 
                
            } else {
                message.channel.send(
                    `<${member.id}> You don't have permission to use this command.`
                    )
            }
    })
    command(client,'c-ask',(message) => {
        if(message.author.id === "348296915143884801","692062388991688814")  {
            const channelIDs = `716745665643937862`
            client.channels.cache.get(channelIDs).send(":taco: I'm feeling a little extra hungry today, could I buy \`1022`\ tacos? `Type 'sell' to sell them tacos!`")
            message.react('✅')
        }

    })
    command(client,'c-busy',(message) => {
        if(message.author.id === "348296915143884801","692062388991688814") {
            const channelIDs = `716745665643937862`
            client.channels.cache.get(channelIDs).send(":rage: Well it seems like everyone working here is lazy, I'm going to the fast food joint across the road.")
            message.react('✅')
        }


    })
    
})

client.login(config.token)
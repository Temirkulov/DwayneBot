const { timeStamp } = require('console');
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
        if(message.author.id === "348296915143884801")

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
        
        .setDescription('The prefix is `;`')
        .setColor('#FEFFA3')
        .setTitle('DwayneBot Help Menu')
        .setThumbnail(logo)
        .addFields(
            {name: "Help Commands", value: 
            `**Help**: Lists out the Help commands
            **ping**: Checks the bot's ping
            **stats**: Displays the Dwaynebot Statistics`
        }, 
        {name:"Admin Commands", value:
        `**cc/clearchannel**: Clears last 100 messages
        **kick**: Kicks a specified user
        **ban**: Bans a specified user
        `
    },
    {name: "Developer Commands", value: 
    `**c-ask**: Customer Prank - ask to sell
    **c-busy**: Customer Prank - Everyone is Lazy
    **status**: Change Bot Status`
}
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
        if(message.author.id === "348296915143884801","692062388991688814","463174263973871626")  {
            const channelIDs = `716745665643937862`
            client.channels.cache.get(channelIDs).send(":taco: I'm feeling a little extra hungry today, could I buy \`1022`\ tacos? `Type 'sell' to sell them tacos!`")
            message.react('✅')
        }

    })
    command(client,'c-busy',(message) => {
        if(message.author.id === "348296915143884801","692062388991688814","463174263973871626") {
            const channelIDs = `716745665643937862`
            client.channels.cache.get(channelIDs).send(":rage: Well it seems like everyone working here is lazy, I'm going to the fast food joint across the road.")
            message.react('✅')
        }


    })
    command(client,'stats',(message) => {
        
        // client.uptime is in millseconds
      // this is just maths, I won't explain much of it
      // % is modulo, AKA the remainder of a division
      //let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
      const logo = 
        'https://static.bangkokpost.com/media/content/20200903/c1_3738615.jpg'
          
      const embed = new Discord.MessageEmbed()
        
        .setTitle('DwayneBot statistics')
        .setDescription('The prefix is `;`')
        .setColor('#FEFFA3')
        .addFields(
             {name: "Bot statistics", value: 
            `Uptime: **${hours} hours ${minutes} minutes ${seconds} seconds**
            Creator: **The Rock**
            Servers: **${client.guilds.cache.size}**
            Version: **1.0.0.06**
            System: **Windows 10**
            Host: **Heroku**`
        },
        
        )
        .setTimestamp()
    
        
        message.channel.send(embed)
    }) 

}) 
client.on('message', message => {
    if (message.content.includes("<@!348296915143884801>") ||
        (/\brock\b/i.test(message.content)) )
        { 
        message.react('763029066722443264');
    }
    if (message.content.includes("<@!768958265291046962>") ||
    (/\bcashew\b/i.test(message.content)) ) {
        message.react('🥜');
    }
    if (message.content.includes("<@!396383786973134848>") ||
    (/\bcoco\b/i.test(message.content)) ) {
        message.react('🥥'); 
    }
    if (/\bsansan\b/i.test(message.content)) {
        message.react('785777451317329920'); 
    } 
    if (message.content.includes("<@!330818210561785856>") ||
    (/\bleela\b/i.test(message.content)) ) {
        message.react('785783420910960651'); 
    }

});


client.login(config.token)
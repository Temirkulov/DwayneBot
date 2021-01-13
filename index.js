const { timeStamp } = require('console');
const Discord = require('discord.js')
const command = require('./command')
const client = new Discord.Client()
const config = require ('./config.json')
const whitelist = (`348296915143884801`,`692062388991688814`,`463174263973871626`,`330818210561785856`)
require('events').EventEmitter.defaultMaxListeners = 20;

client.on('ready', () => {
    console.log('The client is ready!')

    command(client, 'ping', (message) => {
        message.channel.send('Pinging...').then(sent => {
            sent.edit(`Pog! Latency is ${sent.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        })
      })
   
    command(client, 'speedjar',message => {
        if(message.channel.id === '788384111449473036') 
        message.channel.send("See or Change?");
        const collector = new Discord.MessageCollector(message.channel, m => m.channel.id === message.channel.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "See") {
                message.channel.send("You Want To See Someones Spec OK!");
            } else if (message.content == "Change") {
                message.channel.send("You Want To Change Your Spec OK!");
            }
        })
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
        .addField('Invite DwayneBot',`[Invite link (Recommended)](https://discord.com/api/oauth2/authorize?client_id=780813319137263618&permissions=2147483639&scope=bot)
[Invite link (Admin)](https://discord.com/oauth2/authorize?client_id=780813319137263618&permissions=8&scope=bot)`)
             
        
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
**stats**: Displays the Dwaynebot Statistics
**update**: Shows the new bot features
**pickup**: Sends pickup lines - inspired by lacking ✰#0959
**rock**: Built Different`
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
**c-sell**: Customer Prank - Sells to The Rock
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
        if(message.author.id == whitelist)  {
            const channelIDs = `716745665643937862`
            client.channels.cache.get(channelIDs).send(":taco: I'm feeling a little extra hungry today, could I buy \`1050`\ tacos? `Type 'sell' to sell them tacos!`")
            message.react('✅')
        }

    })
    command(client,'c-sell',(message) => {
        if(message.author.id == whitelist)  {
            const channelIDs = `716745665643937862`
            client.channels.cache.get(channelIDs).send(":moneybag: Nice doing business with you **The Rock**! I believe I owe you `$10500` and heres a 10% tip of `$1050` for being awesome!")
            message.react('✅')
        }
    })
    command(client,'c-busy',(message) => {
        if(message.author.id == whitelist) {
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
        .setThumbnail(logo)
        .addField("Bot statistics",` 
        Uptime: **${hours} hours ${minutes} minutes ${seconds} seconds**
Creator: **The Rock**
Servers: **${client.guilds.cache.size}**
Version: **1.0.0.2**
Memory Usage: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb**
System: **Windows 10**
Host: **Heroku**`)
        .setTimestamp()
    
        
        message.channel.send(embed)
    }) 
    command(client, 'coinflip',(message) => {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
        var msg2 = Array(2);
		msg2[1] = "Heads";
	    msg2[2] = "Tails";
        var x = getRandomInt(0, 8);
		if (x < 4){
			message.channel.send(msg2[1]);
		}
		else{
			message.channel.send(msg2[2]);
		}

    }) 
    command(client, 'update',(message) =>{
        const logo = 
        'https://static.bangkokpost.com/media/content/20200903/c1_3738615.jpg'
      const embed = new Discord.MessageEmbed()

      .setColor('#FEFFA3')
      .setThumbnail(logo)
      .setTitle('Bot Information')
      .addFields( {name: `New features (1.0.0.2)`, value:`
-**Minor Fixes**
Minor fixes and bugs, and some slight improvement to the ;rock command
-**c-sell**
Another huge addition to DwayneBot prank arsenal`},
      {name:`Next Version`, value:
      `1.0.0.25`}
    )

    message.channel.send(embed)
    })
    command(client, "rock",(message) => {
        var tests = ["Built different💯🥶",
    "Cut from different cloth📠💯",
"🥶Race:First place💯🏎️💨",
"Breed:Different🥶💯",
 "When the doc tried to draw my blood, ice came out :cold_face: :100:",
"I tried to pay attention but attention paid me💯🤷🥶",
"I don't cruise control, I control the cruise:speaking_head::fax:",
"They fed me to the wolves and i returned leading the pack:point_up_2::gorilla::100:",
"Never in doubt, if I can’t make it with you i’ll make it without:100:",
"We not from here:man_dancing::100::point_up:"];
        var test = Math.floor(Math.random() * tests.length);

    message.channel.send(String([tests[test]]));
    })
    command(client,"sjstart",(message) => {    
})
    command(client, "pickup",(message) => {
        var tests = ["Are you a keyboard ? Because you are my type",
    "I thought Happiness starts with H. But why does mine starts with U",
    "feel my shirt.............its boyfriend material",
    "My doctor says I'm lacking vitamin U",
    "If you were a triangle you'd be acute one",
    "Are you a camera? Because every time I look at you, I smile!",
    "Do you like science because I've got my ion you",
    "Have you been to the doctor's lately? Cause I think you're lacking some vitamin me",
    "boy you got my heartbeat running away :woman_running:,beating like a drum and it’s coming ur way:heart_eyes:",
    "are you a banana? cause i find you a peeling",
    "are you a 90 degree angle? Cause you are looking right",
    "Is your name Google? Because you have everything I've been searching for.",
    "Do your legs hurt from running through my dreams all night?",
    "If a fat man puts you in a bag at night, don't worry I told Santa I wanted you for Christmas",
    "Thank god I'm wearing gloves because you are too hot to handle",
    "girl, when u go to hell, hades resigns cos u are hotter than hell",
    "even if there wasn't gravity on earth, I'd still fall for you",
    "Are you lost ma'am? Because heaven is a long way from here",
    "So, aside from taking my breath away, what do you do for a living?",
    "If covid-19 doesn’t take you out.. can I?",
    "You can't spell virus without U and I",
    "You can’t spell quarantine without “u r a q t”",
    "Did your license get suspended for driving all these guys crazy?",
    "Are you the cure for Alzheimer’s? Because you’re unforgettable",
    "Are you australian? Because you meet all of my koalafications"];
        var test = Math.floor(Math.random() * tests.length);
         message.channel.send(String([tests[test]]));  
    
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
})

client.login(config.token)